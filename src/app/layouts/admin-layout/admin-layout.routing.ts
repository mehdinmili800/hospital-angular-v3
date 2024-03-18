import {Routes} from "@angular/router";
import {ManageHospitalAdminComponent} from "../../pages/admin/manage-hospital-admin/manage-hospital-admin.component";
import {ManagePatientAdminComponent} from "../../pages/admin/manage-patient-admin/manage-patient-admin.component";
import {ManageDoctorComponent} from "../../pages/admin/manage-doctor/manage-doctor.component";
import {ManageNurseAdminComponent} from "../../pages/admin/manage-nurse-admin/manage-nurse-admin.component";
import {
  ManageAppointmentAdminComponent
} from "../../pages/admin/manage-appointment-admin/manage-appointment-admin.component";
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
    path:'form-second-doctor' , component: FormSecondDoctorComponent
  },
  {
    path:'form-second-nurses' , component: FormSecondNursesComponent
  },
  {
    path:'manage-employee',component:ManageEmployeeComponent
  },
  {
    path:'form-second-employee',component:FormSecondEmloyeeComponent
  },
  {
    path:'manage-treatment-admin',component:ManageTreatmentAdminComponent
  }
]
