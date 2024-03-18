import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {DoctorLayoutRouting} from "./doctor-layout.routing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MyAppointmentsComponent} from "../../pages/doctor/my-appointments/my-appointments.component";
import {CreateTreatmentComponent} from "../../pages/doctor/the-create/create-treatment/create-treatment.component";



@NgModule({
  declarations: [
    MyAppointmentsComponent,
    CreateTreatmentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(DoctorLayoutRouting),
    FormsModule,
    ReactiveFormsModule,

  ]
})
export class DoctorLayoutModule { }
