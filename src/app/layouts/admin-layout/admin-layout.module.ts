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
  FormSecondDoctorComponent
} from "../../pages/admin/manage-doctor/form-second-doctor/form-second-doctor.component";
import {
  FormSecondNursesComponent
} from "../../pages/admin/manage-nurse-admin/form-second-nurses/form-second-nurses.component";
import {ManageMedicinesAdminComponent} from "../../pages/admin/manage-medicines-admin/manage-medicines-admin.component";
import {ManageEmployeeComponent} from "../../pages/admin/manage-employee/manage-employee.component";
import {
  FormSecondEmloyeeComponent
} from "../../pages/admin/manage-employee/form-second-emloyee/form-second-emloyee.component";
import {ManageTreatmentAdminComponent} from "../../pages/admin/manage-treatment-admin/manage-treatment-admin.component";



@NgModule({
  declarations: [
    ManageHospitalAdminComponent,
    ManagePatientAdminComponent,
    ManageDoctorComponent,
    ManageNurseAdminComponent,
    ManageAppointmentAdminComponent,
    ManageMedicinesAdminComponent,
    FormSecondDoctorComponent,
    FormSecondNursesComponent,
    ManageEmployeeComponent,
    FormSecondEmloyeeComponent,
    ManageTreatmentAdminComponent

  ],
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRouting),
        FormsModule,
        ReactiveFormsModule,

    ]
})
export class AdminLayoutModule { }
