import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TokenResponse } from '../model/tokenResponse';
import { LoginInfo } from '../model/loginInfo';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://localhost:8080/login'
  constructor(private http: HttpClient) { }


  login(loginInfo : LoginInfo): Observable<TokenResponse>{
    return this.http.post<TokenResponse>(this.apiUrl, loginInfo);
  }

}