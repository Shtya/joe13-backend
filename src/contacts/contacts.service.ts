import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'common/base/base.service';
import { CreateContactDto } from 'dto/contacts.dto';
import { Contact } from 'entities/contact-us.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContactsService extends BaseService<Contact> {
  constructor(
    @InjectRepository(Contact)
    private contactsRepo: Repository<Contact>,
  ) {
    super(contactsRepo);
  }

  async getAllContacts(): Promise<Contact[]> {
    return this.contactsRepo.find({
      order: { created_at: 'DESC' },
    });
  }
}
