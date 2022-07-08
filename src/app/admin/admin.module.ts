import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './home/home.component';
import { LocationListComponent } from './location/location-list/location-list.component';
import { LocationDetailsComponent } from './location/location-details/location-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    LocationListComponent,
    LocationDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
