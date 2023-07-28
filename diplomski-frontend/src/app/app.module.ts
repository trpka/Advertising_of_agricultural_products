import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AnnouncementsRecentComponent } from './announcements-recent/announcements-recent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MechanizationAnnouncementsComponent } from './mechanization-announcements/mechanization-announcements.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarHomeComponent } from './navbar-home/navbar-home.component';
import { Home1Component } from './home1/home1.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { MechanizationAnnouncements1Component } from './mechanization-announcements1/mechanization-announcements1.component';
import { AnnouncementDetailsComponent } from './announcement-details/announcement-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnnouncementsRecentComponent,
    MechanizationAnnouncementsComponent,
    LoginComponent,
    NavbarComponent,
    NavbarHomeComponent,
    Home1Component,
    AdvertisementComponent,
    MechanizationAnnouncements1Component,
    AnnouncementDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
