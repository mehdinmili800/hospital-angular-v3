import {Routes} from "@angular/router";
import {AppointmentListComponent} from "../../pages/nurse/program-list/appointment-list/appointment-list.component";

export const NurseLayoutRouting: Routes = [
  {
    path:'',
    redirectTo:'appointment-list',
    pathMatch:'full',
  },
  {
    path:'appointment-list',component:AppointmentListComponent,
  }
]
