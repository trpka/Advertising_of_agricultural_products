import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { Home1Component } from './home1/home1.component';
import { MechanizationAnnouncements1Component } from './mechanization-announcements1/mechanization-announcements1.component';
import { AnnouncementDetailsComponent } from './announcement-details/announcement-details.component';
import { AnnouncementStepperComponent } from './announcement-stepper/announcement-stepper.component';
import { ProfileRegisteredUserComponent } from './profile-registered-user/profile-registered-user.component';
import { RegistrationComponent } from './registration/registration.component';
import { ConfirmRegistrationRegisteredUserComponent } from './confirm-registration-registered-user/confirm-registration-registered-user.component';

const routes: Routes = [
  {path: '', component:Home1Component},
  {path: 'login', component:LoginComponent},
  {path: 'registration', component:RegistrationComponent},
  {path: 'mechanization-announcements', component:MechanizationAnnouncements1Component},
  {path: 'announcement-details/:id', component:AnnouncementDetailsComponent},
  {path: 'profile-registered-user', component:ProfileRegisteredUserComponent},
  {path: 'confirm-registration/:id', component:  ConfirmRegistrationRegisteredUserComponent},
  {path: 'publication-announcement', component:AnnouncementStepperComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
