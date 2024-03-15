import {Routes} from "@angular/router";
import {ManageHospitalAdminComponent} from "../../pages/admin/manage-hospital-admin/manage-hospital-admin.component";
import {ManagePatientAdminComponent} from "../../pages/admin/manage-patient-admin/manage-patient-admin.component";
import {ManageDoctorComponent} from "../../pages/admin/manage-doctor/manage-doctor.component";
import {ManageNurseAdminComponent} from "../../pages/admin/manage-nurse-admin/manage-nurse-admin.component";
import {
  ManageAppointmentAdminComponent
} from "../../pages/admin/manage-appointment-admin/manage-appointment-admin.component";
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

export const AdminLayoutRouting: Routes = [
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
    path:'form-second-patient' , component: FormSecondPatientComponent
  },
  {
    path:'form-second-doctor' , component: FormSecondDoctorComponent
  },
  {
    path:'form-second-nurses' , component: FormSecondNursesComponent
  }
]
