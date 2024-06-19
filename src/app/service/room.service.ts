<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
=======
// room.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
>>>>>>> christian_soru
import { Observable } from 'rxjs';
import { Room } from '../model/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

<<<<<<< HEAD
  private apiUrl = 'http://localhost:8080/room';

  constructor(private http : HttpClient) { }

  getAllRooms() : Observable<Room> {
    return this.http.get<Room>(this.apiUrl);
  }
}
=======
  private apiUrl = 'http://localhost:8080/rooms'; // URL del tuo backend

  constructor(private http: HttpClient) { }

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(this.apiUrl);
  }
}

>>>>>>> christian_soru
