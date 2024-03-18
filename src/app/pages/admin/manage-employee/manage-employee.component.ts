import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../service/user/user/user.service";
import {PatientService} from "../../../service/user/patient/patient.service";
import {Router} from "@angular/router";
import {EmployeeService} from "../../../service/user/employee/employee.service";

@Component({
  selector: 'app-manage-employee',
  templateUrl: './manage-employee.component.html',
  styleUrls: ['./manage-employee.component.css']
})
export class ManageEmployeeComponent implements OnInit{

  employee:Employee[] = [];

  public username:string | undefined;
  public password:string | undefined;
  public role:string | undefined;

  constructor(private userService:UserService,
              private employeeService:EmployeeService,
              private router:Router) {
  }

  ngOnInit() {
    this.employeeService.getEmployeeAll().subscribe(
      (data) => {
        this.employee = data;
      },
      (error) =>{
        console.error('Error fetching employee');
      }
    )
  }

  createUser():void{
    this.userService.createUser(this.username,this.password,this.role).subscribe(
      () => {
        if (this.role === 'ROLE_EMPLOYEE'){
          this.router.navigate(['/admin-layout/form-second-employee'],
            {queryParams:{username:this.username}});
        }
      }
    )
  }
}

export interface Employee{
  id:number,
  employee:{
    username:string,
  },
  employeeName:string,
  email:string,
  phone:string,
}
