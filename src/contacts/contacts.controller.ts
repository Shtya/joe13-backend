import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
  Query,
  Res,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from 'dto/contacts.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptionsPdf } from 'common/multer.config';
import { Response } from 'express';
import * as ExcelJS from 'exceljs';
import * as fs from 'fs';
import * as path from 'path';
@Controller('contacts')
export class ContactsController {
  constructor(private readonly service: ContactsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', multerOptionsPdf))
  async create(@Body() dto: CreateContactDto, @UploadedFile() file: any) {
    if (dto.type === 'career') {
      if (!file)
        throw new BadRequestException(
          'Career file is required for contact type "career".',
        );
      dto.career_file = `/uploads/careers/${file.filename}`;
    }

    return this.service.create(dto);
  }

  @Get()
  async findAll(@Query() query) {
    const {
      page,
      limit,
      search,
      sortBy,
      sortOrder,
      address,
      offers_name,
      ...restQueryParams
    } = query;

    return this.service.findAll(
      'contacts',
      search,
      page,
      limit,
      sortBy,
      sortOrder,
      [],
      [],
      ['name', 'email', 'phone'], // search fields
      { address, offers_name, ...restQueryParams }, // Pass address and offers_name as specificSearchFields
    );
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }

  @Get('export/excel')
  async exportToExcel(
    @Query('type') type: string, // receive type as query param
    @Res() res: Response,
  ) {
    // Fetch all contacts
    let contacts = await this.service.getAllContacts();

    // Filter by type if provided
    if (type) {
      contacts = contacts.filter((contact) => contact.type === type);
    }

    if (contacts.length === 0) {
      return res.status(404).json({
        success: false,
        message: `No contacts found for type: ${type || 'all'}`,
      });
    }

    // Create workbook
    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'Your Company Name';
    workbook.created = new Date();
    workbook.modified = new Date();

    const worksheet = workbook.addWorksheet('Contacts', {
      properties: { tabColor: { argb: '4472C4' } },
      views: [{ state: 'frozen', xSplit: 0, ySplit: 1 }],
    });

    worksheet.columns = [
      { header: 'Name', key: 'name', width: 30 },
      { header: 'Email', key: 'email', width: 35 },
      { header: 'Phone', key: 'phone', width: 20 },
      { header: 'Address', key: 'address', width: 30 },
      { header: 'Position', key: 'offers_name', width: 25 },
      { header: 'Expected Salary', key: 'offers_price', width: 18 },
      { header: 'Type', key: 'type', width: 15 },
      // { header: 'Career File', key: 'career_file', width: 45 },
      { header: 'National ID', key: 'message', width: 40 },
      { header: 'Created At', key: 'created_at', width: 22 },
    ];

    // Header styling
    const headerRow = worksheet.getRow(1);
    headerRow.font = {
      name: 'Calibri',
      size: 12,
      bold: true,
      color: { argb: 'FFFFFF' },
    };
    headerRow.alignment = {
      vertical: 'middle',
      horizontal: 'center',
      wrapText: true,
    };
    headerRow.fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: '4472C4' },
    };
    headerRow.height = 35;

    // Get base URL from environment or config
    const baseUrl = 'https://backend.joe13th.com/api/';

    // Add filtered rows
    contacts.forEach((contact, index) => {
      // Construct full career file URL with base URL
      let fullCareerFileUrl = contact.career_file;
      if (contact.career_file && !contact.career_file.startsWith('http')) {
        // Remove leading slash if present to avoid double slashes
        const cleanPath = contact.career_file.startsWith('/')
          ? contact.career_file.substring(1)
          : contact.career_file;
        fullCareerFileUrl = `${baseUrl}/${cleanPath}`;
      }

      // Format salary with Saudi Riyal symbol
      let formattedSalary = 'N/A';
      if (contact.offers_price) {
        const salary = Number(contact.offers_price);
        if (!isNaN(salary)) {
          formattedSalary = `${salary.toLocaleString('ar-SA')} ر.س`; // Saudi Riyal symbol
        }
      }

      const row = worksheet.addRow({
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        address: contact.address,
        offers_name: contact.offers_name || 'N/A',
        offers_price: formattedSalary,
        type: contact.type,
        career_file: fullCareerFileUrl,
        message: contact.message || '',
        created_at: contact.created_at
          ? new Date(contact.created_at).toLocaleString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
            })
          : 'N/A',
      });

      row.height = 25;
      row.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: index % 2 === 0 ? 'F2F2F2' : 'FFFFFF' },
      };

      row.font = { name: 'Calibri', size: 11, color: { argb: '333333' } };
      row.alignment = {
        vertical: 'middle',
        horizontal: 'left',
        wrapText: true,
      };

      // Add borders to each cell
      row.eachCell({ includeEmpty: true }, (cell) => {
        cell.border = {
          top: { style: 'thin', color: { argb: 'D3D3D3' } },
          left: { style: 'thin', color: { argb: 'D3D3D3' } },
          bottom: { style: 'thin', color: { argb: 'D3D3D3' } },
          right: { style: 'thin', color: { argb: 'D3D3D3' } },
        };
      });

      // Email hyperlink
      const emailCell = row.getCell('email');
      if (contact.email) {
        emailCell.value = {
          text: contact.email,
          hyperlink: `mailto:${contact.email}`,
        };
        emailCell.font = { color: { argb: '0563C1' }, underline: true };
      }

      // Career file hyperlink with full URL
      const fileCell = row.getCell('career_file');
      if (fullCareerFileUrl) {
        const fileName = fullCareerFileUrl.split('/').pop() || 'Download File';
        fileCell.value = {
          text: fileName,
          hyperlink: fullCareerFileUrl,
        };
        fileCell.font = { color: { argb: '0563C1' }, underline: true };
      }

      // Right-align salary column for better readability
      const salaryCell = row.getCell('offers_price');
      salaryCell.alignment = {
        vertical: 'middle',
        horizontal: 'right',
        wrapText: true,
      };
    });

    worksheet.autoFilter = { from: 'A1', to: 'J1' };

    const exportDir = path.join(process.cwd(), 'uploads', 'exports');
    if (!fs.existsSync(exportDir)) fs.mkdirSync(exportDir, { recursive: true });

    const timestamp = new Date()
      .toISOString()
      .replace(/[:.]/g, '-')
      .slice(0, -5);
    const fileName = `contacts_export_${type || 'all'}_${timestamp}.xlsx`;
    const filePath = path.join(exportDir, fileName);

    await workbook.xlsx.writeFile(filePath);

    const publicPath = `/uploads/exports/${fileName}`;
    return res.json({
      success: true,
      type: type || 'all',
      filePath: publicPath,
      fileName,
      totalRecords: contacts.length,
      message: `Excel exported successfully for type: ${type || 'all'}`,
    });
  }
}
