import { Controller, Get, Post, Body, Param, Put, Delete, Patch, UseInterceptors, UploadedFile, Query,} from '@nestjs/common';
import { TeamMembersService } from './team-members.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerOptions } from 'common/multer.config';
import { slugify } from 'utils/slugify';
import { CreateTeamMemberDto, UpdateTeamMemberDto } from 'dto/team-members.dto';
import { parseJsonFields } from 'utils/parseJsonFields';

@Controller('team-members')
export class TeamMembersController {
  constructor(private readonly teamMembersService: TeamMembersService) {}

  
  @Post()
  @UseInterceptors(FileInterceptor('file', multerOptions))
  async create( @Body() dto: CreateTeamMemberDto, @UploadedFile() file: any ) {

    if (file) {
      dto.image_url = `/uploads/${file.filename}`;
      if(!dto.image_alt) dto.image_alt = dto.name.en
    }
    
    return this.teamMembersService.create(dto);
  }
  
 
  
  @Get()
  findAll(@Query() query) {
    const { page, limit, search, sortBy, sortOrder, ...restQueryParams }  = query  ;
    return this.teamMembersService.findAll(
      'team_members',
      search ,
      page,
      limit,
      sortBy,
      sortOrder,
      [],                // exclude some fields
      [],                // Relations 
      ["name" ],         // search parameters
      restQueryParams    // search with fields
    );;
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.teamMembersService.findOne(+id);
  }


  @Patch(':id')
  @UseInterceptors(FileInterceptor('file', multerOptions))
  update(@Param('id') id: number,@Body() dto: UpdateTeamMemberDto, @UploadedFile() file: any) {

    if (file) {
      dto.image_url = `/uploads/${file.filename}`;
      if(!dto.image_alt) dto.image_alt = dto.name.en
    }
    return this.teamMembersService.update(+id, dto);
  }


  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.teamMembersService.remove(+id);
  }
}
