import { BootstrapOptions, Component, Input, OnInit } from '@angular/core';
import { Booking } from '../model/booking';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-room-availability',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room-availability.component.html',
  styleUrl: './room-availability.component.css'
})
export class RoomAvailabilityComponent implements OnInit{
  @Input("bookings") bookings : Booking[] = [];
  @Input("reservationDate") reservationDate : Date = new Date();
  hours : {time : Date, available : boolean}[] = [];
  ngOnInit(): void {
    const startHour = 9;
    const endHour = 24;
    const date = new Date();
    date.setMinutes(0,0,0);
    for(let hours = startHour; hours < endHour; hours++){
      const time = new Date(date);
      time.setHours(hours);
      this.hours.push({time, available : this.isAvailable(time)});
    }
  }
  isAvailable(time : Date) : boolean {
    return !this.bookings.some(b => {
    //Date.parse(b.checkIn) == time.getTime())
    //Date.parse(b.checkIn) <= time.getTime() && Date.parse(b.checkOut) > time.getTime());
    console.log(b.check_in);
    console.log(new Date(Date.parse(b.check_in)));
    const d = new Date(Date.parse(b.check_in));
    d.setMinutes(0,0,0);
    console.log("******");
    console.log(d.getTime());
    console.log(time.getTime());
    console.log("******");
    return d.getTime() == time.getTime();
    })
  }

  handleClick(time : Date, available : boolean){
    if(available){
      console.log("Facciamo la prenotazione");
    } else {
      alert("Non puoi prenotare un'ora già riservata!");
    }
  }

  // bookings2 : Booking[] =  [
  // { id: 1,
  //   userId: 2,
  //   quantity: 5,
  //   checkIn: "2024-06-20T16:00",
  //   checkOut: "2024-06-20T18:00",
  //   reservationDate: "2024-06-26",
  //   roomId: 4,
  //   paid: true,
  //   cost: 20,
  //   isPromotion: false},
  // { id: 2,
  //   userId: 3,
  //   quantity: 5,
  //   checkIn: "2024-06-20T13:00",
  //   checkOut: "2024-06-20T14:00",
  //   reservationDate: "2024-06-27",
  //   roomId: 5,
  //   paid: false,
  //   cost: 20,
  //   isPromotion: false}
  // ];
}

