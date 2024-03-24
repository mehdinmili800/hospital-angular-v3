import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../service/user/user/user.service";
import {User} from "../../../modules/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-manage-all-users',
  templateUrl: './manage-all-users.component.html',
  styleUrls: ['./manage-all-users.component.css']
})
export class ManageAllUsersComponent implements OnInit{

  users: User[] = [];
  filteredUsers: User[]=[];
  searchTerm:string = '';

  constructor(private userService: UserService,
              private router:Router) { }

  currentPage = 1;
  itemsPerPage = 10;

  get totalPages(): number {
    return Math.ceil(this.users.length / this.itemsPerPage);
  }

  ngOnInit(): void {
    this.getAllUsers();
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

  getAllUsers(): void {
    this.userService.getAllUsers()
      .subscribe(
        (users: User[]) => {
          this.users = users.reverse();
          this.filteredUsers = [...this.users];
          this.searchUsers();
        },
        (error) => {
          console.error('Error fetching users:', error);
          // Handle error as needed, e.g., show an error message to the user
        }
      );
  }

  searchUsers(): void {
    if (!this.searchTerm) {
      this.filteredUsers = [...this.users];
    } else {
      this.filteredUsers = this.users.filter(user =>
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
