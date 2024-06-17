import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralMenu } from '../model/generalMenu';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  private apiUrl = 'http://localhost:8080/menu-food';

  constructor(private http : HttpClient) { }

  getMenu() : Observable<GeneralMenu>{
    return this.http.get<GeneralMenu>(this.apiUrl);
  }
}
