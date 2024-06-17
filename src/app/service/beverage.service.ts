import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Beverage } from '../model/beverage';
import { BeverageMenu } from '../model/beverage-menu';

@Injectable({
  providedIn: 'root'
})
export class BeverageService {

  
  private apiUrl = 'http://localhost:8080/menu-beverage';

  constructor(private http : HttpClient) { }

  getMenu(): Observable<BeverageMenu> {
    return this.http.get<BeverageMenu>(this.apiUrl);
  }
}
