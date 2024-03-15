import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {AdminLayoutRouting} from "./admin-layout.routing";
import {ManageHospitalAdminComponent} from "../../pages/admin/manage-hospital-admin/manage-hospital-admin.component";
import {ManagePatientAdminComponent} from "../../pages/admin/manage-patient-admin/manage-patient-admin.component";
import {ManageDoctorComponent} from "../../pages/admin/manage-doctor/manage-doctor.component";
import {ManageNurseAdminComponent} from "../../pages/admin/manage-nurse-admin/manage-nurse-admin.component";
import {
  ManageAppointmentAdminComponent
} from "../../pages/admin/manage-appointment-admin/manage-appointment-admin.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {
  FormSecondPatientComponent
} from "../../pages/admin/manage-patient-admin/form-second-patient/form-second-patient.component";
import {
  FormSecondDoctorComponent
} from "../../pages/admin/manage-doctor/form-second-doctor/form-second-doctor.component";
import {
  FormSecondNursesComponent
} from "../../pages/admin/manage-nurse-admin/form-second-nurses/form-second-nurses.component";
import {ManageMedicinesAdminComponent} from "../../pages/admin/manage-medicines-admin/manage-medicines-admin.component";



@NgModule({
  declarations: [
    ManageHospitalAdminComponent,
    ManagePatientAdminComponent,
    ManageDoctorComponent,
    ManageNurseAdminComponent,
    ManageAppointmentAdminComponent,
    ManageMedicinesAdminComponent,
    FormSecondPatientComponent,
    FormSecondDoctorComponent,
    FormSecondNursesComponent
  ],
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRouting),
        FormsModule,
        ReactiveFormsModule,

    ]
})
export class AdminLayoutModule { }
