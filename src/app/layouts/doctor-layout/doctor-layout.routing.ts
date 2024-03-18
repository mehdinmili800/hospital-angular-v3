import {Routes} from "@angular/router";
import {MyAppointmentsComponent} from "../../pages/doctor/my-appointments/my-appointments.component";
import {CreateTreatmentComponent} from "../../pages/doctor/the-create/create-treatment/create-treatment.component";

export const DoctorLayoutRouting: Routes = [

  {
    path:'',
    redirectTo:'my-appointment',
    pathMatch:'full',
  },

  {
    path:'my-appointment' ,component:MyAppointmentsComponent,
  },
  {
    path:'create-treatment',component:CreateTreatmentComponent,
  }
]
