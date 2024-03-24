import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../service/user/user/user.service";

import {Router} from "@angular/router";

@Component({
  selector: 'app-manage-nurse-admin',
  templateUrl: './manage-nurse-admin.component.html',
  styleUrls: ['./manage-nurse-admin.component.css']
})
export class ManageNurseAdminComponent{




  public username:string | undefined;
  public password:string | undefined;
  public role: string | undefined;

  constructor(private userService: UserService,
              private router:Router) {
  }



  createUser():void {
    this.userService.createUser(this.username,this.password,this.role).subscribe(
      () => {
        if (this.role === 'ROLE_NURSES'){
          this.router.navigate(['/admin-layout/manage-nurse-admin'],
            {queryParams:{username: this.username}});
        }
      }
    )
    window.location.reload();
  }
}


