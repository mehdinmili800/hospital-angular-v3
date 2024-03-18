import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import { FooterEmployeeComponent } from './footer-employee/footer-employee.component';
import { NavbarEmployeeComponent } from './navbar-employee/navbar-employee.component';
import { SidebarEmployeeComponent } from './sidebar-employee/sidebar-employee.component';



@NgModule({
  declarations: [
    FooterEmployeeComponent,
    NavbarEmployeeComponent,
    SidebarEmployeeComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    FooterEmployeeComponent,
    NavbarEmployeeComponent,
    SidebarEmployeeComponent
  ]
})
export class ComponentsEmployeeModule { }
