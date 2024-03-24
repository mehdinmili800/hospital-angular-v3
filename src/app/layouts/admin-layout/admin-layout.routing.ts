import {Routes} from "@angular/router";
import {ManageHospitalAdminComponent} from "../../pages/admin/manage-hospital-admin/manage-hospital-admin.component";
import {ManagePatientAdminComponent} from "../../pages/admin/manage-patient-admin/manage-patient-admin.component";
import {ManageDoctorComponent} from "../../pages/admin/manage-doctor/manage-doctor.component";
import {ManageNurseAdminComponent} from "../../pages/admin/manage-nurse-admin/manage-nurse-admin.component";
import {
  ManageAppointmentAdminComponent
} from "../../pages/admin/manage-appointment-admin/manage-appointment-admin.component";


import {ManageMedicinesAdminComponent} from "../../pages/admin/manage-medicines-admin/manage-medicines-admin.component";
import {ManageEmployeeComponent} from "../../pages/admin/manage-employee/manage-employee.component";

import {ManageTreatmentAdminComponent} from "../../pages/admin/manage-treatment-admin/manage-treatment-admin.component";
import {ManageAllUsersComponent} from "../../pages/admin/manage-all-users/manage-all-users.component";

export const AdminLayoutRouting: Routes = [
  {
    path:'',
    redirectTo:'manage-all-users',
    pathMatch:'full',
  },
  {
    path:'manage-hospital-admin', component: ManageHospitalAdminComponent
  },
  {
    path:'manage-medicines-admin', component: ManageMedicinesAdminComponent
  },
  {
    path: 'manage-patient-admin', component: ManagePatientAdminComponent
  },
  {
    path:'manage-doctor-admin' , component: ManageDoctorComponent
  },
  {
    path:'manage-nurse-admin' , component: ManageNurseAdminComponent
  },
  {
    path:'manage-appointment-admin' , component: ManageAppointmentAdminComponent
  },

  {
    path:'manage-employee',component:ManageEmployeeComponent
  },

  {
    path:'manage-treatment-admin',component:ManageTreatmentAdminComponent
  },
  {
    path:'manage-all-users',component:ManageAllUsersComponent,
  }
]
