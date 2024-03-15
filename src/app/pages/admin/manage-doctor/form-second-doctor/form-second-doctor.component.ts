import {Component, OnInit} from '@angular/core';
import {DoctorService} from "../../../../service/user/doctor/doctor.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-form-second-doctor',
  templateUrl: './form-second-doctor.component.html',
  styleUrls: ['./form-second-doctor.component.css']
})
export class FormSecondDoctorComponent implements OnInit{

  public username:string | undefined;
  public doctor_name:string | undefined;
  public doctor_specialist:string | undefined;
  public doctor_mobile:string | undefined;
  public doctor_email:string | undefined;
  public doctor_address:string | undefined;

  constructor(private doctorService:DoctorService,
              private router:Router,
              private route:ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
    });
  }

  createPatient(): void {
    this.doctorService.createDoctor(this.username,this.doctor_name,this.doctor_specialist,this.doctor_mobile,
      this.doctor_email,this.doctor_address).subscribe(
      () => {
        this.router.navigate(['/admin-layout/manage-doctor-admin']);
      },
      (error) => {
        console.error(error);
      }
    )
  }


}
