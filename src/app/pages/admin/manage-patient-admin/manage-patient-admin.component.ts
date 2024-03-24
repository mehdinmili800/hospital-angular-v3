import {Component, OnInit} from '@angular/core';
import {User} from "../../../modules/user";
import {UserService} from "../../../service/user/user/user.service";


@Component({
  selector: 'app-manage-patient-admin',
  templateUrl: './manage-patient-admin.component.html',
  styleUrls: ['./manage-patient-admin.component.css']
})
export class ManagePatientAdminComponent implements OnInit{

  patients: User[] = [];
  filteredPatient: User[]=[];
  searchTerm:string = '';

  constructor(private userService: UserService) {
  }

  currentPage = 1;
  itemsPerPage = 10;

  get totalPages(): number {
    return Math.ceil(this.patients.length / this.itemsPerPage);
  }
  ngOnInit() {
    this.getAllPatients();
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


  getAllPatients():void{
    this.userService.getAllUsers()
      .subscribe(
        (users: User[]) => {
          // فلترة قائمة المستخدمين للعثور على المرضى فقط
          this.patients = users.reverse().filter(user => user.role === 'ROLE_PATIENT');
          this.filteredPatient = [...this.patients];
          this.searchPatients();
        },
        (error) => {
          console.error('خطأ في جلب المرضى:', error);
          // يمكنك التعامل مع الخطأ هنا، مثل عرض رسالة خطأ للمستخدم
        }
      );
  }

  searchPatients(): void {
    if (!this.searchTerm) {
      this.filteredPatient = [...this.patients];
    } else {
      this.filteredPatient = this.patients.filter(user =>
        user.username.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        user.role.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    this.currentPage = 1; // Reset current page when search is performed
  }

  deleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe(
      () => {
        console.log(`User with ID ${userId} has been deleted successfully.`);
        // Perform any additional actions after deleting the user
      },
      (error) => {
        console.error('An error occurred:', error);
      }

    );
    window.location.reload();
  }

}
