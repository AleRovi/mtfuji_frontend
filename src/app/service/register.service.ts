import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = 'http://localhost:8080/register';

  constructor(private http : HttpClient) { }

  saveUser(user : User) : Observable<any>{
    return this.http.post<User>(this.apiUrl, user);
  }
}
