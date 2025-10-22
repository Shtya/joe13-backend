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
  UploadedFiles,
} from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { CreateContactDto } from 'dto/contacts.dto';
import {
  FileFieldsInterceptor,
  FileInterceptor,
} from '@nestjs/platform-express';
import { multerOptionsPdf } from 'common/multer.config';
import { Response } from 'express';
import * as ExcelJS from 'exceljs';
import * as fs from 'fs';
import * as path from 'path';
import { careerMixedUploadOptions } from './career-mixed-upload.config';
@Controller('contacts')
export class ContactsController {
  constructor(private readonly service: ContactsService) {}

  @UseInterceptors(
    FileFieldsInterceptor(
      [
        { name: 'file', maxCount: 1 }, // CV (PDF)
        { name: 'personal_photo', maxCount: 1 }, // صورة
      ],
      careerMixedUploadOptions,
    ),
  )
  @Post()
  async create(
    @Body() dto: CreateContactDto,
    @UploadedFiles()
    files: {
      file?: any[];
      personal_photo?: any[];
    },
  ) {
    if (dto.type === 'career') {
      const cv = files?.file?.[0];
      const photo = files?.personal_photo?.[0];

      if (!cv)
        throw new BadRequestException(
          'Career file (PDF) is required for contact type "career".',
        );
      dto.career_file = `/uploads/careers/${cv.filename}`;

      // ✅ Make personal photo optional
      if (photo) {
        dto.personal_photo = `/uploads/photos/${photo.filename}`;
      } else {
        dto.personal_photo = null; // or just omit this line
      }
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
      ['name'], // search fields
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
  async exportToExcel(@Query('type') type: string, @Res() res: Response) {
    try {
      let contacts = await this.service.getAllContacts();

      if (type) {
        contacts = contacts.filter((contact) => contact.type === type);
      }

      if (contacts.length === 0) {
        return res.status(404).json({
          success: false,
          message: `No contacts found for type: ${type || 'all'}`,
        });
      }

      const ExcelJS = require('exceljs');
      const fs = require('fs');
      const path = require('path');

      // Create workbook with metadata
      const workbook = new ExcelJS.Workbook();
      workbook.creator = 'Your Company Name';
      workbook.created = new Date();
      workbook.modified = new Date();

      const worksheet = workbook.addWorksheet('Contacts', {
        properties: { tabColor: { argb: '4472C4' } },
        views: [{ state: 'frozen', xSplit: 0, ySplit: 1 }], // Freeze header row
      });

      // Define columns
      worksheet.columns = [
        { header: 'Name', key: 'name', width: 30 },
        { header: 'Email', key: 'email', width: 35 },
        { header: 'Phone', key: 'phone', width: 20 },
        { header: 'Address', key: 'address', width: 30 },
        { header: 'Position', key: 'offers_name', width: 25 },
        { header: 'Expected Salary', key: 'offers_price', width: 18 },
        { header: 'Type', key: 'type', width: 15 },
        { header: 'National ID', key: 'message', width: 40 },
        { header: 'Created At', key: 'created_at', width: 22 },
      ];

      // ===== STYLE THE HEADER ROW =====
      const headerRow = worksheet.getRow(1);
      headerRow.height = 40;
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
        fgColor: { argb: '4472C4' }, // Professional blue
      };
      headerRow.border = {
        top: { style: 'medium', color: { argb: '2E5090' } },
        left: { style: 'thin', color: { argb: '2E5090' } },
        bottom: { style: 'medium', color: { argb: '2E5090' } },
        right: { style: 'thin', color: { argb: '2E5090' } },
      };

      // ===== ADD DATA ROWS WITH STYLING =====
      const baseUrl = process.env.BASE_URL || 'https://backend.joe13th.com/api';

      contacts.forEach((contact, index) => {
        const row = worksheet.addRow({
          name: contact.name || 'N/A',
          email: contact.email || 'N/A',
          phone: contact.phone || 'N/A',
          address: contact.address || 'N/A',
          offers_name: contact.offers_name || 'N/A',
          offers_price: contact.offers_price
            ? `ريال سعودى${Number(contact.offers_price).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
            : 'N/A',
          type: contact.type || 'N/A',
          message: contact.message || 'N/A',
          created_at: contact.created_at
            ? new Date(contact.created_at).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })
            : 'N/A',
        });

        // Row height
        row.height = 28;

        // Alternating row colors
        row.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: index % 2 === 0 ? 'F8F9FA' : 'FFFFFF' },
        };

        // Row font styling
        row.font = {
          name: 'Calibri',
          size: 11,
          color: { argb: '333333' },
        };

        // Default alignment
        row.alignment = {
          vertical: 'middle',
          horizontal: 'left',
          wrapText: true,
        };

        // Add borders to all cells
        row.eachCell({ includeEmpty: true }, (cell) => {
          cell.border = {
            top: { style: 'thin', color: { argb: 'E0E0E0' } },
            left: { style: 'thin', color: { argb: 'E0E0E0' } },
            bottom: { style: 'thin', color: { argb: 'E0E0E0' } },
            right: { style: 'thin', color: { argb: 'E0E0E0' } },
          };
        });

        // ===== SPECIFIC COLUMN STYLING =====

        // Name column - Bold
        const nameCell = row.getCell('name');
        nameCell.font = {
          ...nameCell.font,
          bold: true,
          color: { argb: '1a1a1a' },
        };

        // Email column - Hyperlink style
        const emailCell = row.getCell('email');
        if (contact.email) {
          emailCell.font = {
            ...emailCell.font,
            color: { argb: '0563C1' },
            underline: true,
          };
          emailCell.value = {
            text: contact.email,
            hyperlink: `mailto:${contact.email}`,
          };
        }

        // Phone column - Center aligned with special formatting
        const phoneCell = row.getCell('phone');
        phoneCell.alignment = {
          vertical: 'middle',
          horizontal: 'center',
        };
        if (contact.phone) {
          phoneCell.font = {
            ...phoneCell.font,
            color: { argb: '2c5282' },
          };
        }

        // Expected Salary - Bold, green, right-aligned
        const salaryCell = row.getCell('offers_price');
        if (contact.offers_price) {
          salaryCell.font = {
            ...salaryCell.font,
            bold: true,
            color: { argb: '16A34A' }, // Green for money
          };
          salaryCell.alignment = {
            vertical: 'middle',
            horizontal: 'right',
          };
        }

        // Type column - Center aligned with badge-like styling
        const typeCell = row.getCell('type');
        typeCell.alignment = {
          vertical: 'middle',
          horizontal: 'center',
        };
        if (contact.type) {
          // Color code based on type
          const typeColors = {
            recruitment: 'E8F5E9', // Light green
            inquiry: 'E3F2FD', // Light blue
            complaint: 'FFF3E0', // Light orange
            feedback: 'F3E5F5', // Light purple
          };
          typeCell.fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: {
              argb: typeColors[contact.type.toLowerCase()] || 'F5F5F5',
            },
          };
          typeCell.font = {
            ...typeCell.font,
            bold: true,
          };
        }

        // Created At - Center aligned with date formatting
        const dateCell = row.getCell('created_at');
        dateCell.alignment = {
          vertical: 'middle',
          horizontal: 'center',
        };
        dateCell.font = {
          ...dateCell.font,
          color: { argb: '666666' },
        };
      });

      // ===== ADD AUTOFILTER =====
      worksheet.autoFilter = {
        from: 'A1',
        to: `I1`,
      };

      // ===== ADD SUMMARY ROW =====
      const summaryRowNumber = worksheet.rowCount + 2; // Skip one row
      const summaryRow = worksheet.addRow([]);
      summaryRow.height = 35;

      // Merge cells for summary information
      worksheet.mergeCells(summaryRowNumber, 1, summaryRowNumber, 5);
      worksheet.mergeCells(summaryRowNumber, 6, summaryRowNumber, 9);

      // Left side summary
      const summaryLeftCell = worksheet.getCell(summaryRowNumber, 1);
      summaryLeftCell.value = `📊 Total Contacts: ${contacts.length}${type ? ` (Type: ${type})` : ''}`;
      summaryLeftCell.font = {
        bold: true,
        color: { argb: '4472C4' },
        size: 12,
      };
      summaryLeftCell.alignment = {
        vertical: 'middle',
        horizontal: 'left',
        indent: 1,
      };

      // Right side summary
      const summaryRightCell = worksheet.getCell(summaryRowNumber, 6);
      summaryRightCell.value = `📅 Generated: ${new Date().toLocaleString(
        'en-US',
        {
          dateStyle: 'medium',
          timeStyle: 'short',
        },
      )}`;
      summaryRightCell.font = {
        bold: true,
        color: { argb: '4472C4' },
        size: 12,
      };
      summaryRightCell.alignment = {
        vertical: 'middle',
        horizontal: 'right',
        indent: 1,
      };

      // Style summary row
      summaryRow.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'E7F3FF' },
      };
      summaryRow.border = {
        top: { style: 'medium', color: { argb: '4472C4' } },
        bottom: { style: 'medium', color: { argb: '4472C4' } },
      };

      // ===== ADD STATISTICS SECTION (OPTIONAL) =====
      if (contacts.length > 0) {
        const statsRowNumber = summaryRowNumber + 2;

        // Type statistics
        const typeStats = contacts.reduce(
          (acc, contact) => {
            const contactType = contact.type || 'Unknown';
            acc[contactType] = (acc[contactType] || 0) + 1;
            return acc;
          },
          {} as Record<string, number>,
        );

        worksheet.getCell(statsRowNumber, 1).value = 'Contact Type Statistics:';
        worksheet.getCell(statsRowNumber, 1).font = { bold: true, size: 11 };

        let statsRow = statsRowNumber + 1;
        Object.entries(typeStats).forEach(([type, count]) => {
          worksheet.getCell(statsRow, 1).value = type;
          worksheet.getCell(statsRow, 2).value = count;
          worksheet.getCell(statsRow, 2).alignment = { horizontal: 'center' };
          statsRow++;
        });
      }

      // ===== SAVE FILE =====
      const exportDir = path.join(process.cwd(), 'uploads', 'exports');
      if (!fs.existsSync(exportDir)) {
        fs.mkdirSync(exportDir, { recursive: true });
      }

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
        filePath: publicPath,
        fileName: fileName,
        totalRecords: contacts.length,
        type: type || 'all',
        message: `Excel exported successfully with ${contacts.length} contact(s)`,
      });
    } catch (error) {
      console.error('❌ Excel Export Error:', error);
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
        error: error.message,
      });
    }
  }
}
