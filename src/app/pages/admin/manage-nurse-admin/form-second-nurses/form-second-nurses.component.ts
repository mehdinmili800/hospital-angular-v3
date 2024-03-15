import {Component, OnInit} from '@angular/core';
import {PatientService} from "../../../../service/user/patient/patient.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NurseService} from "../../../../service/user/nurse/nurse.service";

@Component({
  selector: 'app-form-second-nurses',
  templateUrl: './form-second-nurses.component.html',
  styleUrls: ['./form-second-nurses.component.css']
})
export class FormSecondNursesComponent implements OnInit{

  public username: string | undefined;
  public nurseName:string| undefined;
  public nurse_duty_hour:string| undefined;
  public nurse_mobile:string| undefined;
  public nurse_email:string| undefined;
  public nurse_address:string| undefined;

  constructor(private nursesService: NurseService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.username = params['username'];
    });
  }

  createNurse(): void {
    this.nursesService.createNurse(this.username, this.nurseName,this.nurse_duty_hour, this.nurse_mobile,
      this.nurse_email, this.nurse_address).subscribe(
      () => {
        // Optionally, you can navigate the user to another page or perform additional actions
        this.router.navigate(['/admin-layout/manage-nurse-admin']);
      },
      (error) => {
        console.error(error);
      }
    );
  }


}
