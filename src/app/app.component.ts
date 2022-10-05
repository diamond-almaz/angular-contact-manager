import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IContact } from 'src/assets/types';
import { DataService } from './shared/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  contacts: Observable<IContact[]> = new Observable();

  constructor(private dataService: DataService) {
    
  }

  ngOnInit() {
    this.dataService.getContacts();
  }
}
