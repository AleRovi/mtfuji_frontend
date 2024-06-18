import { Injectable } from '@angular/core';
import { Karaoke } from '../model/karaoke';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KaraokeService {

  private apiUrl = 'http://localhost:8080/karaoke';

  constructor(private http : HttpClient) { }

  getSongs(): Observable<Karaoke> {
    return this.http.get<Karaoke>(this.apiUrl);
  }
}
