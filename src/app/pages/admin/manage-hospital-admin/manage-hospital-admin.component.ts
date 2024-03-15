import {Component, OnInit,} from '@angular/core';
import {HospitalService} from "../../../service/hospital/hospital.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-manage-hospital-admin',
  templateUrl: './manage-hospital-admin.component.html',
  styleUrls: ['./manage-hospital-admin.component.css']
})
export class ManageHospitalAdminComponent implements OnInit{

  hospital:Hospital[] = [];

  public hospital_name:string | undefined;
  public hospital_place:string | undefined;
  public hospital_type:string | undefined;
  public hospital_description:string | undefined;
  public hospital_address:string | undefined;

  constructor(private hospitalService:HospitalService,
              private router:Router) {
  }

  ngOnInit() {
    this.hospitalService.getHospitals().subscribe(
      (data) => {
        this.hospital = data;
      },
      (error)=>{
        console.error('Error fetching hospital:', error);
      }
    )
  }

  createHospital():void {
    this.hospitalService.createHospital(this.hospital_name,this.hospital_place,this.hospital_type,
      this.hospital_description,this.hospital_address).subscribe(
      {}
    );
    this.router.navigate(['/admin-layout/manage-hospital-admin'])
  }

}



export interface Hospital{
  id:number,
  hospital_name:string,
  hospital_place:string,
  hospital_type:string,
  hospital_description:string,
  hospital_address:string
}




