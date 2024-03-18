import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterDoctorComponent } from './footer-doctor/footer-doctor.component';
import { NavbarDoctorComponent } from './navbar-doctor/navbar-doctor.component';
import { SidebarDoctorComponent } from './sidebar-doctor/sidebar-doctor.component';
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [

       FooterDoctorComponent,
       NavbarDoctorComponent,
       SidebarDoctorComponent,
  ],
  imports: [
    CommonModule,
    RouterLink
  ],
  exports:[
    FooterDoctorComponent,
    NavbarDoctorComponent,
    SidebarDoctorComponent,

  ]
})
export class ComponentsDoctorModule { }
