import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContact } from 'src/assets/types';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  host: { class: 'container mx-auto px-4 grid' }
})
export class MainPageComponent implements OnInit {

  contacts: IContact[] = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ contacts }) => {
      this.contacts = contacts;
    })
  }


}
