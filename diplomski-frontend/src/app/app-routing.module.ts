import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MechanizationAnnouncementsComponent } from './mechanization-announcements/mechanization-announcements.component';
import { LoginComponent } from './login/login.component';
import { Home1Component } from './home1/home1.component';
import { MechanizationAnnouncements1Component } from './mechanization-announcements1/mechanization-announcements1.component';
import { AnnouncementDetailsComponent } from './announcement-details/announcement-details.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'mechanization', component:MechanizationAnnouncementsComponent},
  {path: 'home1', component:Home1Component},
  {path: 'mechanization-announcements', component:MechanizationAnnouncements1Component},
  {path: 'announcement-details/:id', component:AnnouncementDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
