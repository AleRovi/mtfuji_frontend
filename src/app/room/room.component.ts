import { Component, Input, OnInit, input } from '@angular/core';
import { Room } from '../model/room';
import { RoomService } from '../service/room.service';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent implements OnInit{

  @Input() room : Room[] = [];

  constructor(private roomService : RoomService){}

  ngOnInit(): void {
    this.roomService.getAllRooms().subscribe({
      next: (roomObject) => {
        this.room = Object.values(roomObject);
      },
      error: (err) => console.error(err)      
    });
  }

  getImagePath(room : Room): string {
    return `images/room/${room.imageName}`;
  }
}


