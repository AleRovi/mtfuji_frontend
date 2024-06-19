// room.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../model/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private apiUrl = 'http://localhost:8080/rooms'; // URL del tuo backend

  constructor(private http: HttpClient) { }

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.apiUrl);
  }
}

