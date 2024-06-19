import { BootstrapOptions, Component, Input } from '@angular/core';
import { Booking } from '../model/booking';

@Component({
  selector: 'app-room-availability',
  standalone: true,
  imports: [],
  templateUrl: './room-availability.component.html',
  styleUrl: './room-availability.component.css'
})
export class RoomAvailabilityComponent {
  @Input("bookings") bookings : Booking[] = [];
  bookings2 : Booking[] =  [
  { id: 1,
    userId: 2,
    quantity: 5,
    checkIn: "2024-06-26T16:00",
    checkOut: "2024-06-26T18:00",
    reservationDate: "2024-06-26",
    roomId: 4,
    paid: true,
    cost: 20,
    isPromotion: false},
  { id: 2,
    userId: 3,
    quantity: 5,
    checkIn: "2024-06-26T13:00",
    checkOut: "2024-06-26T14:00",
    reservationDate: "2024-06-27",
    roomId: 5,
    paid: false,
    cost: 20,
    isPromotion: false}
  ];
}

