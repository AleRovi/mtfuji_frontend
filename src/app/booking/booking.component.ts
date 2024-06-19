
import { Component, Inject } from '@angular/core';


import { AuthInterceptor } from '../interceptor/auth.interceptor';
import { RoomService } from '../service/room.service';
import { Room } from '../model/room';
import { BookingService } from '../service/booking.service';
import { FormsModule, NgForm } from '@angular/forms';
import { RoomAvailabilityComponent } from '../room-availability/room-availability.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RoomAvailabilityComponent],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent {

  isLoggedIn = true; // Simulating logged in status

  selectedRoom: Room | null = null;
  booking = {
    date: '',
    time: '',
    hours: 1
  };

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
  }

  bookRoom() {
    
  }

  showAvailability(roomId : number, form : NgForm) {
    this.bookingService.getBookingsForRoom(form.value.date, roomId).subscribe({
      next: (bks) => console.log(bks),
      error: (err) => console.log(err)
    });
  }
}