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
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog'; 

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
import { AnnouncementStepperComponent } from './announcement-stepper/announcement-stepper.component';
import { ProfileRegisteredUserComponent } from './profile-registered-user/profile-registered-user.component';
import { RegistrationComponent } from './registration/registration.component';
import { ConfirmRegistrationRegisteredUserComponent } from './confirm-registration-registered-user/confirm-registration-registered-user.component';
import { CustomerSupportComponent } from './customer-support/customer-support.component';
import { ChatComponent } from './chat/chat.component';
import { MessageComponent } from './message/message.component';
import { ShoppingBasketComponent } from './shopping-basket/shopping-basket.component';
import { AdvertisingRequestComponent } from './advertising-request/advertising-request.component';
import { RequestsForPostingAnnouncementsComponent } from './requests-for-posting-announcements/requests-for-posting-announcements.component';
import { MyAnnouncementsComponent } from './my-announcements/my-announcements.component';
import { ProfileCompanyComponent } from './profile-company/profile-company.component';
import { PopUpProfileChangeSuccessfulComponent } from './pop-up-profile-change-successful/pop-up-profile-change-successful.component';
import { PopUpPasswordChangeSuccessfulComponent } from './pop-up-password-change-successful/pop-up-password-change-successful.component';
import { PopUpAdvertisingRequestSentComponent } from './pop-up-advertising-request-sent/pop-up-advertising-request-sent.component';
import { RegistrationCompanyComponent } from './registration-company/registration-company.component';
import { CompanyProfileActivationRequirementsComponent } from './company-profile-activation-requirements/company-profile-activation-requirements.component';
import { ImagesViewComponent } from './images-view/images-view.component';
import { CompanyRequestDetailsComponent } from './company-request-details/company-request-details.component';
import { PopUpActivateCompanyRequestComponent } from './pop-up-activate-company-request/pop-up-activate-company-request.component';
import { RequestsForAdvertisingComponent } from './requests-for-advertising/requests-for-advertising.component';
import { AdvertisementRequestDetailsComponent } from './advertisement-request-details/advertisement-request-details.component';
import { PopUpActivateAnnouncementComponent } from './pop-up-activate-announcement/pop-up-activate-announcement.component';
import { PopUpRequestToPublishAnnouncementComponent } from './pop-up-request-to-publish-announcement/pop-up-request-to-publish-announcement.component';
import { PopUpAddProductIntoBasketComponent } from './pop-up-add-product-into-basket/pop-up-add-product-into-basket.component';
import { ShoppingBasketRegUserComponent } from './shopping-basket-reg-user/shopping-basket-reg-user.component';
import { PopUpPurchaseDoneComponent } from './pop-up-purchase-done/pop-up-purchase-done.component';
import { PopUpDeactivateCompanyRequestComponent } from './pop-up-deactivate-company-request/pop-up-deactivate-company-request.component';
import { PopUpDeleteAnnouncementComponent } from './pop-up-delete-announcement/pop-up-delete-announcement.component';
import { PopUpActionComponent } from './pop-up-action/pop-up-action.component';




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
    AnnouncementStepperComponent,
    ProfileRegisteredUserComponent,
    RegistrationComponent,
    ConfirmRegistrationRegisteredUserComponent,
    CustomerSupportComponent,
    ChatComponent,
    MessageComponent,
    ShoppingBasketComponent,
    AdvertisingRequestComponent,
    RequestsForPostingAnnouncementsComponent,
    MyAnnouncementsComponent,
    ProfileCompanyComponent,
    PopUpProfileChangeSuccessfulComponent,
    PopUpPasswordChangeSuccessfulComponent,
    PopUpAdvertisingRequestSentComponent,
    RegistrationCompanyComponent,
    CompanyProfileActivationRequirementsComponent,
    ImagesViewComponent,
    CompanyRequestDetailsComponent,
    PopUpActivateCompanyRequestComponent,
    RequestsForAdvertisingComponent,
    AdvertisementRequestDetailsComponent,
    PopUpActivateAnnouncementComponent,
    PopUpRequestToPublishAnnouncementComponent,
    PopUpAddProductIntoBasketComponent,
    ShoppingBasketRegUserComponent,
    PopUpPurchaseDoneComponent,
    PopUpDeactivateCompanyRequestComponent,
    PopUpDeleteAnnouncementComponent,
    PopUpActionComponent
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
    MatInputModule, 
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
