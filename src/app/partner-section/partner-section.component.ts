import { Region } from './../shared/models/region';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner-section',
  templateUrl: './partner-section.component.html',
  styleUrls: ['./partner-section.component.css']
})
export class PartnerSectionComponent implements OnInit {
  currentRegion: Region | string;
  regionEnum: typeof Region = Region;
  constructor() { }

  ngOnInit(): void {
    // set default region as Europe
    this.currentRegion = Region.Europe;
  }

  setRegion = (currRegion: Region | string) => this.currentRegion = currRegion;
}
