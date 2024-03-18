import {Component, OnInit} from '@angular/core';
import {EmployeeService} from "../../../../service/user/employee/employee.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-form-second-emloyee',
  templateUrl: './form-second-emloyee.component.html',
  styleUrls: ['./form-second-emloyee.component.css']
})
export class FormSecondEmloyeeComponent implements OnInit{

  public username:string | undefined;
  public employeeName:string | undefined;
  public email:string | undefined;
  public phone:string | undefined;

  constructor(private employeeService:EmployeeService,
              private router:Router,
              private route:ActivatedRoute) {
  }

  ngOnInit(): void{
    this.route.queryParams.subscribe((params) =>{
      this.username = params['username'];
    });
  }

  createPatient():void{
    this.employeeService.createEmployee(this.username,this.employeeName,this.email,this.phone).subscribe(
      () => {
        this.router.navigate(['/admin-layout/manage-employee']);
      },
      (error) => {
        console.error(error);
      }
    )
  }
}
