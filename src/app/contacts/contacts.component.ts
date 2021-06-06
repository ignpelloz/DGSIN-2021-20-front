import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit { // conrols the view: all the JS code needed to get the contacts has to go in this class

  contacts: Contact[];

  constructor(private contactService: ContactService) { }

  ngOnInit(): void { // initialize contacts here better than using the constructor
    // now from this component we dont know how the contacts will be gotten: "we got independent from the way the contacts will be gotten, the service will be in charge of that"
    //this.contacts = this.contactService.getContacts();
    //this.contactService.getContacts().subscribe(
    //  (contacts) => this.contacts = contacts
    //);
    this.getContacts();
  }

  getContacts(): void{
    this.contactService.getContacts().subscribe(
      (contacts) => this.contacts = contacts
    );
  }

  addContact(name: string, email: string, phone: number): void{
    // Validate the data: email has @, phone is a number, etc before adding the data
    name = name.trim();
    if (!name){
      return;
    }
    this.contactService.addContact({name, email, phone}).subscribe(
      _ => { // this callback func. takes no parameters, hence '_'
        this.getContacts(); // reloads the list aftern an addition
      }
    );
  }

  deleteContacts(): void {
    this.contactService.deleteContacts().subscribe(
      _ => this.getContacts() // reloads the list aftern an addition
    )
  }

  deleteContact(name: string): void {
    this.contactService.deleteContact(name).subscribe(
      _ => this.getContacts() // reloads the list aftern an addition
    )
  }
}
