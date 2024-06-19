import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../model/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private apiUrl = 'http://localhost:8080/room';

  constructor(private http : HttpClient) { }

  getAllRooms() : Observable<Room> {
    return this.http.get<Room>(this.apiUrl);
  }
}
