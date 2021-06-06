import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs'; // similar to promises
import { catchError } from 'rxjs/operators';
import { Contact } from './contact';
import { CONTACTS } from './mock-contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactsUrl = "http://localhost:8080/api/v1/contacts"; // backend's local URL

  private httpOptions = {
    header: new HttpHeaders({ 'Content-Type': 'application/json'}),
    responseType: 'text' as 'text'
  }

  constructor(private http: HttpClient) { }

  getContacts(): Observable<Contact[]> {
    //return CONTACTS;
    return this.http.get<Contact[]>(this.contactsUrl)
    .pipe( // similar to Unix' '|'
      catchError(this.handleError<Contact[]>('getContacts', []))
    );
  }

  getContact(contactName: string): Observable<Contact> {
    return this.http.get<Contact>(`${this.contactsUrl}/${contactName}`)
    .pipe(
      catchError(this.handleError<Contact>(`getContact name=${contactName}`))
    );
  }

  updateContact(updatedContact: Contact): Observable<Contact> {
    return this.http.put<Contact>(`${this.contactsUrl}/${updatedContact.name}`,updatedContact) // TODO: do here all the checks (right format and fields, etc)
    .pipe(
      catchError(this.handleError<Contact>(`updatedContact name=${updatedContact.name}`))
    );
  }

  addContact(newContact: Contact): Observable<any> { // returns 201
    return this.http.post(this.contactsUrl, newContact, this.httpOptions)
    .pipe(
      catchError(this.handleError<any>('addContact'))
    )
  }

  deleteContacts(): Observable<any>{
    return this.http.delete(this.contactsUrl, this.httpOptions)
    .pipe(
      catchError(this.handleError<any>('deleteContacts'))
    )
  }

  deleteContact(contactName: string): Observable<any>{
    return this.http.delete(`${this.contactsUrl}/${contactName}`, this.httpOptions)
    .pipe(
      catchError(this.handleError<any>(`deleteContact name=${contactName}`))
    )
  }

  private handleError<T>(operation = "operation", result?: T){ // No type here, means any return would do
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }
}
