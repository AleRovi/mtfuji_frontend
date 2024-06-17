import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../model/register';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private apiUrl = 'http://localhost:8080/register';

  constructor(private http : HttpClient) { }

  saveUser(user : Register) : Observable<any>{
    return this.http.post<Register>(this.apiUrl, user);
  }
}
