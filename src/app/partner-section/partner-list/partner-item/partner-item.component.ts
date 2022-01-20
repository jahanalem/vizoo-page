import { IPartner } from './../../../shared/models/partner';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner-item',
  templateUrl: './partner-item.component.html',
  styleUrls: ['./partner-item.component.css']
})
export class PartnerItemComponent implements OnInit {
  @Input() partner: IPartner;
  constructor() { }

  ngOnInit(): void {
  }

}
