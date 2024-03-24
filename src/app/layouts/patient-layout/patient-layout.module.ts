import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {PatientLayoutRouting} from "./patient-layout-routing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  AppointmentDoctorComponent
} from "../../pages/patient/program-list/appointment-doctor/appointment-doctor.component";
import {TreatmentDoctorComponent} from "../../pages/patient/program-list/treatment-doctor/treatment-doctor.component";



@NgModule({
  declarations: [
    AppointmentDoctorComponent,
    TreatmentDoctorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PatientLayoutRouting),
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class PatientLayoutModule { }
