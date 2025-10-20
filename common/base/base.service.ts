import {
  BadRequestException,
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
  Req,
} from '@nestjs/common';
import { Repository, Brackets, QueryFailedError } from 'typeorm';
import { checkEntityExists } from 'utils/checkEntityExists';
import { I18nService } from 'nestjs-i18n';
import { slugify } from 'utils/slugify';

export interface FindAllOptions {
  entityName: string;
  page?: number;
  limit?: number;
  search?: string;
  sortBy?: string;
  sortOrder?: 'ASC' | 'DESC';
  searchFields?: string[];
  relations?: string[];
  fieldsExclude?: string[];
  filters?: Record<string, any>; // Additional filters like { price: 12 }
}

@Injectable()
export class BaseService<T> {
  @Inject(I18nService)
  public readonly i18n: I18nService;

  constructor(protected readonly repository: Repository<T>) {}

  async update(id: any, dto: any) {
    const metadata: any = this.repository.metadata;
    for (const field of Object.keys(dto)) {
      const fieldExists = metadata.columns.some(
        (column) => column.propertyName === field,
      );

      if (!fieldExists) {
        throw new BadRequestException(
          this.i18n.t('events.field_not_found', { args: { field } }),
        );
      }
    }

    await this.repository.update(id, dto);
    return checkEntityExists(
      this.repository,
      id,
      this.i18n.t('events.record.not_found'),
    );
  }

  async create(dto: any, relations?: string[]) {
    const metadata: any = this.repository.metadata;

    for (const field of Object.keys(dto)) {
      const fieldExists = metadata.columns.some(
        (column) => column.propertyName === field,
      );
      if (!fieldExists) {
        throw new BadRequestException(
          this.i18n.t('events.field_not_found', { args: { field } }),
        );
      }
    }

    // Generate slug if not provided
    if (!dto.slug) {
      // Use dto.title.en or dto.title.ar if present
      if (dto.title?.en || dto.title?.ar) {
        dto.slug = slugify(dto.title.en);
      } else {
        // Fallback: check if title exists in entity fields
        const titleField = metadata.columns.find(
          (col) => col.propertyName === 'title',
        );
        if (titleField) {
          const dbTitle = (dto as any).title;
          if (dbTitle?.en || dbTitle?.ar) {
            dto.slug = slugify(dbTitle.en);
          }
        }
      }
    }

    try {
      const data = this.repository.create(dto);
      return await this.repository.save(data);
    } catch (error) {
      if (error instanceof QueryFailedError) {
        if (error.message.includes(this.i18n.t('events.duplicate_key'))) {
          throw new BadRequestException(this.i18n.t('events.record_exists'));
        }
      }
      throw new BadRequestException(error);
    }
  }

  async findAll(
    entityName: string,
    search?: string,
    page: any = 1,
    limit: any = 10,
    sortBy?: string,
    sortOrder: 'ASC' | 'DESC' = 'DESC',
    fieldsExclude?: string[],
    relations?: string[],
    searchFields?: string[],
    specificSearchFields?: any,
    customRelations?: boolean,
    status?: string,
    occasion?: number | number[],
  ) {
    const pageNumber = Number(page) || 1;
    const limitNumber = Number(limit) || 10;

    if (
      isNaN(pageNumber) ||
      isNaN(limitNumber) ||
      pageNumber < 1 ||
      limitNumber < 1
    ) {
      throw new BadRequestException(this.i18n.t('events.invalid_pagination'));
    }

    if (!['ASC', 'DESC'].includes(sortOrder)) {
      throw new BadRequestException(this.i18n.t('events.invalid_sort_order'));
    }

    const skip = (pageNumber - 1) * limitNumber;
    const query = this.repository
      .createQueryBuilder(entityName)
      .skip(skip)
      .take(limitNumber);

    //! =============== Search ==================
    if (search && searchFields?.length >= 1) {
      query.andWhere(
        new Brackets((qb) => {
          for (const field of searchFields) {
            const columnMetadata = this.repository.metadata.columns.find(
              (col) => col.propertyName === field,
            );

            if (!columnMetadata) continue;

            const fieldPath = `${entityName}.${field}`;

            // ✅ Handle JSONB column (stringify + LIKE)
            if (columnMetadata.type === 'jsonb') {
              qb.orWhere(`LOWER(${fieldPath}::text) LIKE LOWER(:search)`, {
                search: `%${search}%`,
              });
            }
            // ✅ Handle string-based columns (varchar, text, String)
            else if (
              columnMetadata.type === String ||
              typeof columnMetadata.type === 'function' ||
              ['varchar', 'character varying', 'text', 'citext'].includes(
                String(columnMetadata.type).toLowerCase(),
              )
            ) {
              qb.orWhere(`LOWER(${fieldPath}) LIKE LOWER(:search)`, {
                search: `%${search}%`,
              });
            }
            // ✅ Handle numeric
            else if (
              ['decimal', 'float', 'int', 'integer', 'numeric'].includes(
                String(columnMetadata.type),
              )
            ) {
              const numericSearch = parseFloat(search);
              if (!isNaN(numericSearch)) {
                qb.orWhere(`${fieldPath} = :numericSearch`, { numericSearch });
              }
            }
          }
        }),
      );
    }

    //! =============== Specific Filters (Address and Position) ==================
    if (specificSearchFields) {
      // Filter by address (city)
      if (specificSearchFields.address && specificSearchFields.address !== '') {
        const validCities = [
          'Riyadh',
          'Al_Kharj',
          'Al_Majmaah',
          'Dawadmi',
          'Al_Zulfi',
          'Shaqra',
          'Wadi_Al_Dawasir',
          'Afif',
          'Al_Ghat',
          'Hotat_Bani_Tamim',
          'Makkah',
          'Jeddah',
          'Taif',
          'Rabigh',
          'Al_Lith',
          'Khulais',
          'Al_Kamil',
          'Dammam',
          'Al_Khobar',
          'Dhahran',
          'Al_Ahsa',
          'Jubail',
          'Qatif',
          'Ras_Tanura',
          'Khafji',
          'Hafar_Al_Batin',
          'Al_Nairyah',
          'Madinah',
          'Yanbu',
          'Badr',
          'Al_Ula',
          'Khaybar',
          'Al_Hanakiyah',
          'Buraidah',
          'Unaizah',
          'Al_Rass',
          'Al_Bukayriyah',
          'Muthnab',
          'Riyadh_Al_Khabra',
          'Abha',
          'Khamis_Mushait',
          'Al_Namas',
          'Bisha',
          'Rijal_Almaa',
          'Dhahran_Al_Janub',
          'Ahad_Rafidah',
          'Tabuk',
          'Duba',
          'Al_Wajh',
          'Umluj',
          'Haql',
          'Tayma',
          'Hail',
          'Baqaa',
          'Shinan',
          'Al_Ghazalah',
          'Najran',
          'Sharurah',
          'Habuna',
          'Jazan',
          'Sabya',
          'Abu_Arish',
          'Baysh',
          'Al_Darb',
          'Samtah',
          'Al_Bahah',
          'Al_Mikhwah',
          'Baljurashi',
          'Al_Qunfudhah',
          'Sakakah',
          'Domat_Al_Jandal',
          'Tabarjal',
          'Qurayyat',
          'Arar',
          'Rafha',
          'Turaif',
          'Al_Uwayqilah',
        ];

        if (validCities.includes(specificSearchFields.address)) {
          query.andWhere(`${entityName}.address = :address`, {
            address: specificSearchFields.address,
          });
        } else {
          throw new BadRequestException(
            this.i18n.t('events.invalid_city_value'),
          );
        }
      }

      // Filter by position (offers_name)
      if (
        specificSearchFields.offers_name &&
        specificSearchFields.offers_name !== ''
      ) {
        const validPositions = [
          'general_manager',
          'sales_manager',
          'marketing_manager',
          'hr_manager',
          'finance_manager',
          'it_manager',
          'software_engineer',
          'web_developer',
          'graphic_designer',
          'marketing_specialist',
          'sales_representative',
          'hr_specialist',
          'accountant',
          'customer_service',
          'project_manager',
          'network_engineer',
          'business_analyst',
          'operations_manager',
          'quality_manager',
          'support_technician',
          'digital_marketing_manager',
          'seo_specialist',
          'social_media_specialist',
          'mobile_app_developer',
          'product_manager',
          'cybersecurity_engineer',
          'data_analyst',
          'data_scientist',
          'pr_manager',
          'regional_sales_manager',
        ];

        if (validPositions.includes(specificSearchFields.offers_name)) {
          query.andWhere(`${entityName}.offers_name = :offers_name`, {
            offers_name: specificSearchFields.offers_name,
          });
        } else {
          throw new BadRequestException(
            this.i18n.t('events.invalid_position_value'),
          );
        }
      }

      // Filter by type (existing functionality)
      if (specificSearchFields.type && specificSearchFields.type !== '') {
        query.andWhere(`${entityName}.type = :type`, {
          type: specificSearchFields.type,
        });
      }
    }

    //! =============== Add Relations ==================
    if (relations?.length > 0) {
      const invalidRelations = relations.filter(
        (relation) =>
          !this.repository.metadata.relations.some(
            (rel) => rel.propertyName === relation,
          ),
      );
      if (invalidRelations.length > 0) {
        throw new BadRequestException(
          this.i18n.t('events.invalid_relations', {
            args: { relations: invalidRelations.join(', ') },
          }),
        );
      }
      relations.forEach((relation) => {
        query.leftJoinAndSelect(`${entityName}.${relation}`, relation);
      });
    }

    //! =============== Sorting ==================
    const defaultSortBy = 'created_at';
    const sortField = sortBy || defaultSortBy;
    const sortDirection = sortOrder || 'DESC';

    const columnExists = this.repository.metadata.columns.some(
      (col) => col.propertyName === sortField,
    );
    if (!columnExists) {
      throw new BadRequestException(
        this.i18n.t('events.invalid_sort_by', { args: { sortBy: sortField } }),
      );
    }
    query.orderBy(`${entityName}.${sortField}`, sortDirection);

    //! Fetch data
    const [data, total] = (await query.getManyAndCount()) as any;

    return { limit: limitNumber, countRecored: total, page: pageNumber, data };
  }

  async findOne(id: any, relations?: string[]) {
    const entity: any = await this.repository.findOne({
      where: { id } as any,
      relations,
    });

    if (!entity) {
      throw new NotFoundException(
        this.i18n.t('events.record_not_found', { args: { id } }),
      );
    }

    // Modify image_url if present
    // const modifiedEntity = {
    //   ...entity,
    //   image_url: entity.image_url
    //     ? entity.image_url.startsWith('http')
    //       ? entity.image_url
    //       : `http://localhost:8081/${entity.image_url}`
    //     : null,
    // };

    // // Modify images array if present
    // if (modifiedEntity.images) {
    //   modifiedEntity.images = modifiedEntity.images.map((image) => ({
    //     ...image,
    //     url: `http://localhost:8081/${image.url.startsWith('/') ? image.url.slice(1) : image.url}`,
    //   }));
    // }

    return entity;
  }

  async remove(id: any) {
    await checkEntityExists(
      this.repository,
      id,
      this.i18n.t('events.record_not_found', { args: { id } }),
    );
    await this.repository.delete(id);

    return { message: this.i18n.t('events.record_deleted', { args: { id } }) };
  }
}
