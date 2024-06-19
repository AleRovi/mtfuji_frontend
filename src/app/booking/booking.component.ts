
// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  isLoggedIn = true; // Simulating logged in status

  filmRooms = [
    { name: 'Stanza Film Piccola 1', type: 'Piccola', cost: 30 },
    { name: 'Stanza Film Piccola 2', type: 'Piccola', cost: 30 },
    { name: 'Stanza Film Piccola 3', type: 'Piccola', cost: 30 },
    { name: 'Stanza Film Grande 1', type: 'Grande', cost: 60 },
    { name: 'Stanza Film Grande 2', type: 'Grande', cost: 60 },
    { name: 'Stanza Film Grande 3', type: 'Grande', cost: 60 },
  ];

  karaokeRooms = [
    { name: 'Stanza Karaoke 1', cost: 30 },
    { name: 'Stanza Karaoke 2', cost: 30 },
    { name: 'Stanza Karaoke 3', cost: 30 },
    { name: 'Stanza Karaoke 4', cost: 30 },
    { name: 'Stanza Karaoke 5', cost: 30 },
    { name: 'Stanza Karaoke 6', cost: 30 },
  ];

  selectedRoom: any;
  booking = {
    date: '',
    time: '',
    hours: 1
  };

  selectRoom(room: any) {
    this.selectedRoom = room;
  }

  bookRoom() {
    if (this.isLoggedIn) {
      const totalCost = this.selectedRoom.cost * this.booking.hours;
      alert(`Prenotazione effettuata per ${this.selectedRoom.name} per un totale di €${totalCost}`);
      // Logic to handle the booking can be added here
    } else {
      alert('Devi essere loggato per prenotare una stanza.');
    }
  }
}