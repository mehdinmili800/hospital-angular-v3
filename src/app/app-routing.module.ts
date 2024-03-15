import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminLayoutComponent} from "./layouts/admin-layout/admin-layout.component";
import {AuthComponent} from "./pages/auth/auth.component";
import {DoctorLayoutComponent} from "./layouts/doctor-layout/doctor-layout.component";

const routes: Routes = [

  {
    path:'',
    redirectTo:'auth',
    pathMatch:'full',
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
    path:'doctor-layout',component:DoctorLayoutComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
