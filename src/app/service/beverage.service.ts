import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GeneralMenuBeverage } from '../model/generalMenuBeverage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeverageService {

  
  private apiUrl = 'http://localhost:8080/beverage';

  constructor(private http : HttpClient) { }

  getMenu() : Observable<GeneralMenuBeverage>{
    return this.http.get<GeneralMenuBeverage>(this.apiUrl);
  }
}
