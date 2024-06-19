import { Injectable } from '@angular/core';
import { Booking } from '../model/booking';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private apiUrl = 'http://localhost:8080/booking';
  private roomBookingUrl = 'http://localhost:8080/rooms';

  constructor(private http : HttpClient) { }

  createBooking(booking : Booking) : Observable<any>{
    return this.http.post<Booking>(this.apiUrl, booking);
  }

  updateBooking(booking : Booking, bookingId : number) : Observable<any>{
    const url = `${this.apiUrl}/${bookingId}`;
    return this.http.put<Booking>(url, booking);
  }

  deleteBooking(bookingId : number) : Observable<any>{
    const url = `${this.apiUrl}/${bookingId}`;
    return this.http.delete<Booking>(url);
  }

  getBookingsForRoom(day : Date, roomId : number){
    const url = `${this.roomBookingUrl}/${roomId}/${day}/bookings`;
    return this.http.get<Booking[]>(url);
  }
}
