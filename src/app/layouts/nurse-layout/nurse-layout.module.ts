import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {NurseLayoutRouting} from "./nurse-layout-routing";
import {AppointmentListComponent} from "../../pages/nurse/program-list/appointment-list/appointment-list.component";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    AppointmentListComponent,
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(NurseLayoutRouting),
        FormsModule
    ]
})
export class NurseLayoutModule { }
