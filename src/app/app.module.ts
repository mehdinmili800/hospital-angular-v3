import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthComponent } from './pages/auth/auth.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {ComponentsAdminModule} from "./components/components-admin/components-admin.module";
import {AdminLayoutModule} from "./layouts/admin-layout/admin-layout.module";
import {TokenInterceptor} from "./token/TokenInterceptor";
import { DoctorLayoutComponent } from './layouts/doctor-layout/doctor-layout.component';
import {ComponentsDoctorModule} from "./components/components-doctor/components-doctor.module";
import {EmployeeLayoutComponent} from "./layouts/employee-layout/employee-layout.component";

import {ComponentsEmployeeModule} from "./components/components-employee/components-employee.module";
import {EmployeeLayoutModule} from "./layouts/employee-layout/employee-layout.module";
import { PatientLayoutComponent } from './layouts/patient-layout/patient-layout.component';

import {ComponentsPatientModule} from "./components/components-patient/components-patient.module";
import {PatientLayoutModule} from "./layouts/patient-layout/patient-layout.module";
import { NurseLayoutComponent } from './layouts/nurse-layout/nurse-layout.component';
import {ComponentsNurseModule} from "./components/components-nurse/components-nurse.module";
import { HospitalInfoComponent } from './pages/hospital-info/hospital-info.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthComponent,
    DoctorLayoutComponent,
    EmployeeLayoutComponent,
    PatientLayoutComponent,
    NurseLayoutComponent,
    HospitalInfoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ComponentsAdminModule,
    AdminLayoutModule,
    ComponentsDoctorModule,
    EmployeeLayoutModule,
    ComponentsEmployeeModule,
    ComponentsPatientModule,
    PatientLayoutModule,
    ComponentsNurseModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
