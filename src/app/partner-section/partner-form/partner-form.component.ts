import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IPartner } from 'src/app/shared/models/partner';
import { Region } from 'src/app/shared/models/region';

@Component({
  selector: 'app-partner-form',
  templateUrl: './partner-form.component.html',
  styleUrls: ['./partner-form.component.css']
})
export class PartnerFormComponent implements OnInit {
  @Output() partnerInstance = new EventEmitter<IPartner>();
  regions: typeof Region = Region;
  region: string;
  country: string;
  name: string;
  imageUrl: string;
  websiteUrl?: string;

  constructor() { }

  ngOnInit(): void {
  }

  toolTip(): string {
    if (this.region === '') {
      return 'Please select region!';
    }
    else if (this.country === '') {
      return 'Please enter a country!';
    }
    else if (this.name === '') {
      return 'Please enter a name!';
    }
    else if (this.imageUrl === '') {
      return 'Please enter a image url!';
    }
  }

  onAddPartner() {
    this.partnerInstance.emit({ region: this.region, country: this.country, name: this.name, imageUrl: this.imageUrl, websiteUrl: this.websiteUrl });

    console.log("region = " + this.region);
    console.log("country = " + this.country);
    console.log("name = " + this.name);
    console.log("imageUrl = " + this.imageUrl);
    console.log("websiteUrl = " + this.websiteUrl);
  }

}
