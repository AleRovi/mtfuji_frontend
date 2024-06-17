import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuBeverage } from '../model/menuBeverage';

@Injectable({
  providedIn: 'root'
})
export class BeverageService {

  
  private apiUrl = 'http://localhost:8080/beverage';

  constructor(private http : HttpClient) { }

  getMenu() : Observable<MenuBeverage>{
    return this.http.get<MenuBeverage>(this.apiUrl);
  }
}
