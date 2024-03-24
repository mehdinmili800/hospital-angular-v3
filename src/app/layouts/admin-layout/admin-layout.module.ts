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


import {ManageMedicinesAdminComponent} from "../../pages/admin/manage-medicines-admin/manage-medicines-admin.component";
import {ManageEmployeeComponent} from "../../pages/admin/manage-employee/manage-employee.component";

import {ManageTreatmentAdminComponent} from "../../pages/admin/manage-treatment-admin/manage-treatment-admin.component";
import {ManageAllUsersComponent} from "../../pages/admin/manage-all-users/manage-all-users.component";



@NgModule({
  declarations: [
    ManageHospitalAdminComponent,
    ManagePatientAdminComponent,
    ManageDoctorComponent,
    ManageNurseAdminComponent,
    ManageAppointmentAdminComponent,
    ManageMedicinesAdminComponent,
    ManageEmployeeComponent,
    ManageTreatmentAdminComponent,
    ManageAllUsersComponent,


  ],
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRouting),
        FormsModule,
        ReactiveFormsModule,

    ]
})
export class AdminLayoutModule { }
