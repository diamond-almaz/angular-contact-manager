import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IContact } from 'src/assets/types';
import { Observable } from 'rxjs';

const BASE_URL = 'http://localhost:3000/contacts';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  contacts: Observable<IContact[]> = new Observable();
  

  constructor(private http: HttpClient) {

  }

  getContacts() {
    this.contacts = this.http.get<IContact[]>(BASE_URL) 
  }
}
