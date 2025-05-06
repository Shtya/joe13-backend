import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'common/base/base.service';
import { TeamMember } from 'entities/team-members.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TeamMembersService extends BaseService<TeamMember> {
  constructor(
    @InjectRepository(TeamMember) private teamMembersRepo: Repository<TeamMember>,
  ) {
    super(teamMembersRepo);
  }


}
