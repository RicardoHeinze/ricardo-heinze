import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Types } from '../../../models/Types';

@Component({
  selector: 'rhz-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.less']
})
export class ContactSectionComponent implements OnInit {
  contactList: Array<Types.Contact> = [];

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.contactList = this.contactService.getContactItems();
  }

}
