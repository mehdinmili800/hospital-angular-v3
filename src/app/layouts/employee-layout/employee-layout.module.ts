import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {EmployeeLayoutRouting} from "./employee-layout.routing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  CreateAppointmentComponent
} from "../../pages/employee/work-hospital/create-appointment/create-appointment.component";
import {CreatePatientComponent} from "../../pages/employee/work-hospital/create-patient/create-patient.component";




@NgModule({
  declarations: [
    CreateAppointmentComponent,
    CreatePatientComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(EmployeeLayoutRouting),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class EmployeeLayoutModule { }
