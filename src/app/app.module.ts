import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';


import { HeaderComponent } from './header/header.component';
import { PartnerSectionComponent } from './partner-section/partner-section.component';
import { PartnerListComponent } from './partner-section/partner-list/partner-list.component';
import { PartnerItemComponent } from './partner-section/partner-list/partner-item/partner-item.component';
import { FooterComponent } from './footer/footer.component';
import { PartnerFormComponent } from './partner-section/partner-form/partner-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PartnerSectionComponent,
    PartnerListComponent,
    PartnerItemComponent,
    FooterComponent,
    PartnerFormComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatMenuModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
