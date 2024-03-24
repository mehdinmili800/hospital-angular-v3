import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { FooterPatientComponent } from './footer-patient/footer-patient.component';
import { NavbarPatientComponent } from './navbar-patient/navbar-patient.component';
import { SidebarPatientComponent } from './sidebar-patient/sidebar-patient.component';



@NgModule({
  declarations: [

       FooterPatientComponent,
       NavbarPatientComponent,
       SidebarPatientComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    FooterPatientComponent,
    NavbarPatientComponent,
    SidebarPatientComponent

  ]
})
export class ComponentsPatientModule { }
