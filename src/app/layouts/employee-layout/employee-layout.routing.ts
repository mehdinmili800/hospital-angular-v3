import {Routes} from "@angular/router";
import {
  CreateAppointmentComponent
} from "../../pages/employee/work-hospital/create-appointment/create-appointment.component";
import {CreatePatientComponent} from "../../pages/employee/work-hospital/create-patient/create-patient.component";
import {
  CreateProfilePatientComponent
} from "../../pages/employee/work-hospital/create-patient/create-profile-patient/create-profile-patient.component";


export const EmployeeLayoutRouting: Routes = [
  {
    path:'',
    redirectTo:'create-appointment',
    pathMatch:'full',
  },
  {
    path:'create-appointment',component:CreateAppointmentComponent,
  },
  {
    path:'create-patient',component:CreatePatientComponent,
  },
  {
    path:'create-profile-patient',component:CreateProfilePatientComponent,
  },



]
