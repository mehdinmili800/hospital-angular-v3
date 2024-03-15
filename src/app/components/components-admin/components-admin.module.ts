import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {NavbarAdminComponent} from "./navbar-admin/navbar-admin.component";
import {SidebarAdminComponent} from "./sidebar-admin/sidebar-admin.component";
import {FooterAdminComponent} from "./footer-admin/footer-admin.component";



@NgModule({
  declarations: [
    NavbarAdminComponent,
    SidebarAdminComponent,
    FooterAdminComponent

  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarAdminComponent,
    SidebarAdminComponent,
    FooterAdminComponent

  ]
})
export class ComponentsAdminModule { }
