import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../service/user/user/user.service";
import {Router} from "@angular/router";
import {User} from "../../../../modules/user";

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit{
  patients: User[] = [];

  filteredUser: User[]=[];
  searchTerm:string = '';

  currentPage = 1;
  itemsPerPage = 10;



  public username: string | undefined;
  public password: string | undefined;
  public role: string | undefined;

  constructor(private userService: UserService,
              private router:Router) {
  }

  get totalPages(): number {
    return Math.ceil(this.patients.length / this.itemsPerPage);
  }

  prevPage():void{
    if (this.currentPage > 1){
      this.currentPage--;
    }
  }

  nextPage():void{
    if (this.currentPage < this.totalPages){
      this.currentPage++;
    }
  }

  ngOnInit(): void {
    this.getAllPatients();
  }

  getAllPatients(): void {
    this.userService.getAllUsers()
      .subscribe(
        (users: User[]) => {
          // فلترة قائمة المستخدمين للعثور على المرضى فقط
          this.patients = users.reverse().filter(user => user.role === 'ROLE_PATIENT');
          this.filteredUser = [...this.patients];
          this.searchPatient();
        },
        (error) => {
          console.error('خطأ في جلب المرضى:', error);
          // يمكنك التعامل مع الخطأ هنا، مثل عرض رسالة خطأ للمستخدم
        }
      );
  }

  searchPatient():void{
    if (!this.searchTerm) {
      this.filteredUser = [...this.patients];
    } else {
      this.filteredUser = this.patients.filter(user =>
        user.username.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    this.currentPage = 1; // Reset current page when search is performed
  }


  createUser(): void{
    this.userService.createUser(this.username,this.password,this.role).subscribe(
      () => {
        if (this.role === 'ROLE_PATIENT'){
          this.router.navigate(['/employee-layout/create-profile-patient'],
            {queryParams:{username: this.username}});
        }
      }
    )
    window.location.reload();
  }


  deleteUser(userId:number):void{
    this.userService.deleteUser(userId).subscribe(
      () => {
        console.log(`Appointment with ID ${userId} has been deleted successfully.`);
      },
      (error) =>{
        console.error('An error occurred:', error);
      }
    )
    window.location.reload();
  }
}
