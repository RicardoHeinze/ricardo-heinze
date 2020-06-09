import { Injectable } from '@angular/core';
import { Types } from '../models/Types';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactList: Array<Types.Contact> = [];

  constructor() {
    this.setContactItems();
  }

  setContactItems(): void {
    this.contactList.push(new Types.Contact(1, 'Localização', 'Alto da Mooca, São Paulo', 'icon-location-mark', 'https://www.google.com/maps/@?api=1&map_action=map&parameters'));
    this.contactList.push(new Types.Contact(2, 'Tel/WhatsApp', '(11) 976313-5805', 'icon-phone', 'tel:+119763135805'));
    this.contactList.push(new Types.Contact(3, 'Website', 'www.ricardoheinze.com.br', 'icon-website', 'https://www.ricardoheinze.com.br'));
    this.contactList.push(new Types.Contact(4, 'E-mail', 'ricardo.heinze@hotmail.com', 'icon-email', 'mailto:ricardo.heinze@hotmail.com'));
    this.contactList.push(new Types.Contact(5, 'LinkedIn', 'ricardoheinze22', 'icon-linkedin', 'https://www.linkedin.com/in/ricardoheinze22/'));
    this.contactList.push(new Types.Contact(6, 'Facebook', 'ricardolheinze', 'icon-facebook', 'https://www.facebook.com/ricardolheinze'));
  }

  getContactItems(): Array<Types.Contact> {
    return this.contactList;
  }
}
