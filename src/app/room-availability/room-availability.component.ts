import { BootstrapOptions, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Booking } from '../model/booking';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-room-availability',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room-availability.component.html',
  styleUrl: './room-availability.component.css'
})
export class RoomAvailabilityComponent implements OnInit, OnChanges{
  ngOnChanges(changes: SimpleChanges): void {
    this.refreshGrid();
  }
  
  @Input("bookings") bookings : Booking[] = [];
  @Input("reservationDate") reservationDate : Date | null = null;
  @Output() hourChosen : EventEmitter<Date> = new EventEmitter<Date>();
  hours : {time : Date, available : boolean}[] = [];
  ngOnInit(): void {
    console.log("ngOnInit");
    const startHour = 9;
    const endHour = 24;
    this.reservationDate!.setMinutes(0,0,0);
    for(let hours = startHour; hours < endHour; hours++){
      const time = new Date(this.reservationDate!);
      time.setHours(hours);
      this.hours.push({time, available : this.isAvailable(time)});
    }
  }

  isAvailable(time : Date) : boolean {
    return !this.bookings.some(b => {
    const d = new Date(Date.parse(b.check_in));
    d.setMinutes(0,0,0);      
    return d.getTime() == time.getTime();
    });
  }

  refreshGrid(){
    if(!this.hours || this.hours.length == 0){
      return;
    }
    if(!this.reservationDate){
      return;
    }
    this.hours = this.hours.map(h => { 
      return {time: h.time,available : this.isAvailable(h.time)};
      });
    }

  handleClick(time : Date, available : boolean){
    if(available){
      console.log("Facciamo la prenotazione");
      this.hourChosen.emit(time);
      /* const check_out = new Date(time);
      check_out.setHours(time.getHours() + 1);
      const booking : Booking ={
        id : 0,
        check_in : time.toString(),
        check_out : check_out.toString(),
        cost : 1000,
        isPromotion : false,
        paid : false,
        quantity : 10,
        reservation_date : 
      }; */
    } else {
      alert("Non puoi prenotare un'ora già riservata!");
    }
  }
}

