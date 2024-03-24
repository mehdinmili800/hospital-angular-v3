import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminLayoutComponent} from "./layouts/admin-layout/admin-layout.component";
import {AuthComponent} from "./pages/auth/auth.component";
import {DoctorLayoutComponent} from "./layouts/doctor-layout/doctor-layout.component";
import {EmployeeLayoutComponent} from "./layouts/employee-layout/employee-layout.component";
import {PatientLayoutComponent} from "./layouts/patient-layout/patient-layout.component";
import {NurseLayoutComponent} from "./layouts/nurse-layout/nurse-layout.component";
import {HospitalInfoComponent} from "./pages/hospital-info/hospital-info.component";

const routes: Routes = [

  {
    path:'',
    redirectTo:'auth',
    pathMatch:'full',
  },
  {
    path:'hospital-info',component:HospitalInfoComponent
  },
  {
    path:'auth',component:AuthComponent
  },
  {
    path:'admin-layout',
    component:AdminLayoutComponent,
    children:[{
      path:'',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }]
  },

  {
    path:'doctor-layout',
    component:DoctorLayoutComponent,
    children:[{
      path:'',
      loadChildren: () => import('./layouts/doctor-layout/doctor-layout.module').then(m => m.DoctorLayoutModule)
    }]
  },

  {
    path:'employee-layout',
    component:EmployeeLayoutComponent,
    children:[{
      path:'',
      loadChildren: () => import('./layouts/employee-layout/employee-layout.module').then(m => m.EmployeeLayoutModule)
    }]
  },
  {
    path:'patient-layout',
    component:PatientLayoutComponent,
    children:[{
      path:'',
      loadChildren: () => import('./layouts/patient-layout/patient-layout.module').then(m => m.PatientLayoutModule)
    }]
  },
  {
    path:'nurse-layout',
    component:NurseLayoutComponent,
    children:[{
      path:'',
      loadChildren: () => import('./layouts/nurse-layout/nurse-layout.module').then(m => m.NurseLayoutModule)
    }]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
