import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AnnouncementsRecentComponent } from './announcements-recent/announcements-recent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MechanizationAnnouncementsComponent } from './mechanization-announcements/mechanization-announcements.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnnouncementsRecentComponent,
    MechanizationAnnouncementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
