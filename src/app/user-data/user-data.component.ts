import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

   users: User[] = [];
constructor ( private userService: UserService ){}
ngOnInit() {
 this.getuserdata();
    
}
 getuserdata(){  this.userService.getUsers()
.subscribe((user: User[]) => { this.users = user})
 }   
}
