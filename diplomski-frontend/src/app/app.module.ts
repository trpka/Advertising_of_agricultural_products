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
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnnouncementsRecentComponent } from './announcements-recent/announcements-recent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarHomeComponent } from './navbar-home/navbar-home.component';
import { Home1Component } from './home1/home1.component';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { MechanizationAnnouncements1Component } from './mechanization-announcements1/mechanization-announcements1.component';
import { AnnouncementDetailsComponent } from './announcement-details/announcement-details.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { AnnouncementStepperComponent } from './announcement-stepper/announcement-stepper.component';
import { ProfileRegisteredUserComponent } from './profile-registered-user/profile-registered-user.component';
import { RegistrationComponent } from './registration/registration.component';
import { ConfirmRegistrationRegisteredUserComponent } from './confirm-registration-registered-user/confirm-registration-registered-user.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from './message/message.component';


@NgModule({
  declarations: [
    AppComponent,
    AnnouncementsRecentComponent,
    LoginComponent,
    NavbarComponent,
    NavbarHomeComponent,
    Home1Component,
    AdvertisementComponent,
    MechanizationAnnouncements1Component,
    AnnouncementDetailsComponent,
    ButtonToggleComponent,
    AnnouncementStepperComponent,
    ProfileRegisteredUserComponent,
    RegistrationComponent,
    ConfirmRegistrationRegisteredUserComponent,
    CustomerSupportComponent,
    ChatComponent,
    MessageComponent
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
    MatButtonModule,
    MatButtonToggleModule,
    MatStepperModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
