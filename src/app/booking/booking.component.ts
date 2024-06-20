
import { Component, Inject } from '@angular/core';


import { AuthInterceptor } from '../interceptor/auth.interceptor';
import { RoomService } from '../service/room.service';
import { Room } from '../model/room';
import { BookingService } from '../service/booking.service';
import { FormsModule, NgForm } from '@angular/forms';
import { RoomAvailabilityComponent } from '../room-availability/room-availability.component';
import { Booking } from '../model/booking';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RoomAvailabilityComponent],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent {


  isLoggedIn = true; // Simulating logged in status
  bookings : Booking[] = [];
  selectedDate : Date = new Date();
  selectedRoom: Room | null = null;
  booking = {
    date: '',
    time: '',
    hours: 1
  };
  showReservations = false;
  rooms: any[] = [];

  constructor(private authService: AuthInterceptor, private roomService: RoomService, private bookingService : BookingService) {}

  ngOnInit(): void {
    this.loadRooms();
  }

  loadRooms(): void {
    this.roomService.getRooms().subscribe(rooms => {
      this.rooms = rooms;
      console.log(rooms);
    });
  }

  selectRoom(room: Room) {
    this.selectedRoom = room; 
    this.showReservations = false;
  }

  showAvailability(roomId : number, form : NgForm) {
    this.selectedDate = new Date(form.value.date);
    this.bookingService.getBookingsForRoom(form.value.date, roomId).subscribe({
      next: (bks) => {
        this.bookings = bks;
        console.log(bks);
        this.showReservations = true;
      },
      error: (err) => console.log(err)
    });
  }

  onHourChosen(time: Date) {
    console.log("onHourChosen");
    console.log(time);
    const check_out = new Date(time);
    check_out.setHours(time.getHours() + 1);
    const booking : Booking ={
      id : 0,
      check_in : this.formatLocalDateTime(time),
      check_out : this.formatLocalDateTime(check_out),
      cost : this.selectedRoom!.cost,
      isPromotion : false,
      paid : false,
      quantity : 10,
      reservation_date : this.formatLocalDate(this.selectedDate),
      roomId : this.selectedRoom!.id      
    };
    this.bookingService.createBooking(booking).subscribe({
      next : b => {
        console.log(b);
        this.loadBookings();
      },
      error : e => console.log(e)
    });
  }
  loadBookings() {
    this.bookingService.getBookingsForRoom(this.formatLocalDate(this.selectedDate) as any, this.selectedRoom!.id).subscribe({
      next: (bks) => {
        this.bookings = bks;
        console.log(bks);
        this.showReservations = true;
      },
      error: (err) => console.log(err)
    });
  }

  /* formatDateTime(d : Date){
    let isoString = d.toISOString().slice(0,19);
    return isoString;
  }

  formatDate(d : Date){
    let isoString = d.toISOString().slice(0,10);
    return isoString;
  } */
  
  formatLocalDateTime(date : Date){
    let isoLocalDateTimeString = `${date.getFullYear()}-${this.pad(date.getMonth() + 1)}-${this.pad(date.getDate())}T${this.pad(date.getHours())}:${this.pad(date.getMinutes())}:${this.pad(date.getSeconds())}`;
    return isoLocalDateTimeString;
  }

  pad(number : number) { if (number < 10) { return '0' + number; } return number; }

  formatLocalDate(date : Date){
    let isoLocalDateString = `${date.getFullYear()}-${this.pad(date.getMonth() + 1)}-${this.pad(date.getDate())}`;
    return isoLocalDateString;
  }
}