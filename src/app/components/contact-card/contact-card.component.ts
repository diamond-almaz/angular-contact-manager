import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BUTTON_TYPES } from 'src/assets/constants';
import { IContact } from 'src/assets/types';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.scss']
})
export class ContactCardComponent implements OnInit {
  
  @Input() contact!: IContact;

  buttonTypes = BUTTON_TYPES;
  constructor() { }

  ngOnInit(): void {

  }

}
