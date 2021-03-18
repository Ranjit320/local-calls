import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { User } from './user'



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [{
    id: 1, email: "ankur.weaver@reqres.in",
    first_name: "ANKUR",
    last_name: "SHARMA",
  },
  {
    id: 2,
    email: "karan@gmail.com",
    first_name: "KARAN",
    last_name: "SHARMA",
  },
  {
    id: 3,
    email: "ranjit@gmail.com",
    first_name: "RANJIT",
    last_name: "SHARMA",
  },
  {
    id: 4,
    email: "meenakshi@gmail.com",
    first_name: "MEENU",
    last_name: "SHARMA",
  },
  {
    id: 5,
    email: "janet@gmail.com",
    first_name: "JANET",
    last_name: "SHARMA",
  },
  {
    id: 6,
    email: "munish@gmail.com",
    first_name: "MUNISH",
    last_name: "TEJI",
  },
  ]
  constructor() { }
  getUsers(): Observable<User[]> {
    return of(this.users)
  }
}
