import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  private apiUrl = 'http://localhost:8080/films';

  constructor(private http : HttpClient) { }

  getFilms() : Observable<Movie>{
    return this.http.get<Movie>(this.apiUrl);
  }
}
