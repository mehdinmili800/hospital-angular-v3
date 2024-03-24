import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterNurseComponent} from "./footer-nurse/footer-nurse.component";
import {NavbarNurseComponent} from "./navbar-nurse/navbar-nurse.component";
import {SidebarNurseComponent} from "./sidebar-nurse/sidebar-nurse.component";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    FooterNurseComponent,
    NavbarNurseComponent,
    SidebarNurseComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    FooterNurseComponent,
    NavbarNurseComponent,
    SidebarNurseComponent
  ]
})
export class ComponentsNurseModule { }
