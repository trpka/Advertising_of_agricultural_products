import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MechanizationAnnouncementsComponent } from './mechanization-announcements/mechanization-announcements.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'mechanization', component:MechanizationAnnouncementsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
