import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080/register';


  constructor(private http : HttpClient) { }

  saveUser(user : User) : Observable<User>{
    return this.http.post<User>(this.apiUrl, user);
  }
}
