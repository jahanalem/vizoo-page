import { IPartner } from './../../shared/models/partner';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Region } from 'src/app/shared/models/region';

@Component({
  selector: 'app-partner-list',
  templateUrl: './partner-list.component.html',
  styleUrls: ['./partner-list.component.css']
})
export class PartnerListComponent implements OnInit {
  @Input() selectedRegion: Region | string;
  @Input() partnerInstance: IPartner | null;

  selectedPartners: IPartner[];
  partners: IPartner[] = [
    { id: 1, region: Region.Europe, country: "Germany", name: "Assyst GmbH", imageUrl: "../../../assets/images/assyst.jpg", websiteUrl: "http://www.human-solutions.com" },
    { id: 2, region: Region.Asia, country: "Turkey", name: "Astaş Juki", imageUrl: "../../../assets/images/juki-logo_800x600_fill.jpg", websiteUrl: "https://astasjuki.com" },
    { id: 3, region: Region.Asia, country: "Japan", name: "Born Digital, Inc.", imageUrl: "../../../assets/images/BornDigital_120.png", websiteUrl: "https://www.borndigital.co.jp/" },
    { id: 4, region: Region.America, country: "United States", name: "Browzwear Solutions Pte Ltd.", imageUrl: "../../../assets/images/BW_120.png", websiteUrl: "https://browzwear.com" },
    { id: 5, region: Region.Asia, country: "China, Hong Kong and Singapore", name: "Browzwear Solutions Pte Ltd.", imageUrl: "../../../assets/images/BW_120.png", websiteUrl: "https://browzwear.com" },
    { id: 6, region: Region.America, country: "United States", name: "Digitize Designs", imageUrl: "../../../assets/images/DigitizeDesigns_120.png", websiteUrl: "https://digitizedesigns.com" },
    { id: 7, region: Region.Asia, country: "China", name: "Beijing Leatech Co., Ltd", imageUrl: "../../../assets/images/Leatech_120.png", websiteUrl: "#" },
    { id: 8, region: Region.Asia, country: "Turkey", name: "Masterkey Virtual Fashion", imageUrl: "../../../assets/images/Masterkey_120.png", websiteUrl: "https://www.masterkey.com.tr" },
    { id: 9, region: Region.Asia, country: "Greece, Turkey", name: "Polytropon", imageUrl: "../../../assets/images/Polytropon_120.png", websiteUrl: "#" },
    { id: 10, region: Region.Europe, country: "Italy", name: "Prisma Tech, S.r.l.", imageUrl: "../../../assets/images/Prisma_120.png", websiteUrl: "https://www.prisma-tech.it" },
    { id: 11, region: Region.Asia, country: "Pakistan", name: "Triple Tree Solutions", imageUrl: "../../../assets/images/TripleTreeSolutions__120.png", websiteUrl: "https://www.3-tree.com" },
    { id: 12, region: Region.Asia, country: "Taiwan", name: "UFA Enterprise Co Ltd", imageUrl: "../../../assets/images/UFA_120.png", websiteUrl: "https://www.ufado.com.tw" },
  ]

  constructor() {
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
    if (this.partnerInstance != null) {
      this.partners.push(this.partnerInstance);
      console.log("NEW INSTANCE = " + this.partnerInstance.country);
      this.partnerInstance = null;
    }
    if (this.selectedRegion === undefined || this.selectedRegion === 'All')
      this.selectedPartners = this.partners;
    else
      this.selectedPartners = this.partners.filter(p => p.region.toString() === this.selectedRegion);
  }

  // ngDoCheck() {
  //   console.log('ngDoCheck called!');
  // }

  // ngAfterContentInit() {
  //   console.log('ngAfterContentInit called!');
  // }

  // ngAfterContentChecked() {
  //   console.log('ngAfterContentChecked called!');
  // }

  // ngAfterViewInit() {
  //   console.log('ngAfterViewInit called!');
  // }

  // ngAfterViewChecked() {
  //   console.log('ngAfterViewChecked called!');
  // }

  // ngOnDestroy() {
  //   console.log('ngOnDestroy called!');
  // }
}
