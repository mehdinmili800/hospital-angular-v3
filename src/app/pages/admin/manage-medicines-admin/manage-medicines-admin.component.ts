import { Component } from '@angular/core';
import {HospitalService} from "../../../service/hospital/hospital.service";
import {Router} from "@angular/router";
import {MedicinesService} from "../../../service/medicines/medicines.service";

@Component({
  selector: 'app-manage-medicines-admin',
  templateUrl: './manage-medicines-admin.component.html',
  styleUrls: ['./manage-medicines-admin.component.css']
})
export class ManageMedicinesAdminComponent {

  medicines:Medicines[] = [];

  public medicine_name:string | undefined;
  public medicine_company:string | undefined;
  public medicine_composition:string | undefined;
  public medicine_cost:string | undefined;
  public medicine_type:string | undefined;
  public medicine_dose:string | undefined;
  public medicine_description:string | undefined;

  constructor(private medicineService:MedicinesService,
              private router:Router) {
  }

  ngOnInit() {
    this.medicineService.getMedicine().subscribe(
      (data) => {
        this.medicines = data;
      },
      (error)=>{
        console.error('Error fetching hospital:', error);
      }
    )
  }

  createMedicines():void {
    this.medicineService.createMedicine(this.medicine_name,this.medicine_company,this.medicine_composition,
      this.medicine_cost,this.medicine_type,this.medicine_dose,this.medicine_description).subscribe(
      {}
    );
    this.router.navigate(['/admin-layout/manage-medicines-admin'])
  }

}



export interface Medicines{
  id:number,
  medicine_name:string,
  medicine_company:string,
  medicine_composition:string,
  medicine_cost:string,
  medicine_type:string,
  medicine_dose:string,
  medicine_description:string
}
