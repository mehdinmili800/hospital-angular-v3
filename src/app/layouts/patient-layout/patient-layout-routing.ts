import {Routes} from "@angular/router";
import {
  AppointmentDoctorComponent
} from "../../pages/patient/program-list/appointment-doctor/appointment-doctor.component";
import {TreatmentDoctorComponent} from "../../pages/patient/program-list/treatment-doctor/treatment-doctor.component";

export const PatientLayoutRouting:Routes =[

  {
    path:'',
    redirectTo:'appointment-doctor',
    pathMatch:'full',
  },
  {
    path:'appointment-doctor',component:AppointmentDoctorComponent,
  },
  {
    path:'treatment-doctor',component:TreatmentDoctorComponent,
  }
]
