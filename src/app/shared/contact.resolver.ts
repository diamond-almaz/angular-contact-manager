import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { IContact } from 'src/assets/types';
import { DataService } from './services/data.service';

@Injectable({
  providedIn: 'root'
})
export class ContactResolver implements Resolve<IContact[]> {

  constructor(private dataService: DataService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IContact[]> {
    return this.dataService.contacts;
  }
}
