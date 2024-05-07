import { Component, EventEmitter, Output } from '@angular/core';
import { Contact } from '../../models/contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  contact: Contact = <Contact>{};
  viewOnly: boolean = false;

  @Output() contactFormSubmitEvent = new EventEmitter<Contact>;

  submit() {
    this.contactFormSubmitEvent.emit(this.contact);
  }
}
