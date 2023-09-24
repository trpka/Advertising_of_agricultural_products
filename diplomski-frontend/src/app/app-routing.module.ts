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
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { ChatComponent } from './chat/chat.component';
import { ShoppingBasketComponent } from './shopping-basket/shopping-basket.component';
import { AdvertisingRequestComponent } from './advertising-request/advertising-request.component';
import { RequestsForPostingAnnouncementsComponent } from './requests-for-posting-announcements/requests-for-posting-announcements.component';
import { MyAnnouncementsComponent } from './my-announcements/my-announcements.component';
import { ProfileCompanyComponent } from './profile-company/profile-company.component';
import { RegistrationCompanyComponent } from './registration-company/registration-company.component';
import { CompanyProfileActivationRequirementsComponent } from './company-profile-activation-requirements/company-profile-activation-requirements.component';
import { CompanyRequestDetailsComponent } from './company-request-details/company-request-details.component';

const routes: Routes = [
  {path: '', component:Home1Component},
  {path: 'login', component:LoginComponent},
  {path: 'registration', component:RegistrationComponent},
  {path: 'mechanization-announcements', component:MechanizationAnnouncements1Component},
  {path: 'announcement-details/:id', component:AnnouncementDetailsComponent},
  {path: 'profile-registered-user', component:ProfileRegisteredUserComponent},
  {path: 'confirm-registration/:id', component:  ConfirmRegistrationRegisteredUserComponent},
  {path: 'publication-announcement', component:AnnouncementStepperComponent},
  {path: 'customer-support', component:CustomerSupportComponent},
  {path: 'chat', component:ChatComponent},
  {path: 'shopping-basket', component:ShoppingBasketComponent},
  {path: 'advertisement-request', component:AdvertisingRequestComponent},
  {path: 'requests-for-posting-announcements', component:RequestsForPostingAnnouncementsComponent},
  {path: 'my-announcements', component:MyAnnouncementsComponent},
  {path: 'profile-company', component:ProfileCompanyComponent},
  {path: 'registration-company', component:RegistrationCompanyComponent},
  {path: 'company-profile-activation-requirements', component:CompanyProfileActivationRequirementsComponent},
  {path: 'company-request-details/:id', component:CompanyRequestDetailsComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
