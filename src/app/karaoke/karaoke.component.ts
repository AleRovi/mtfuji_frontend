import { Component, OnInit } from '@angular/core';
import { KaraokeService } from '../service/karaoke.service';
import { Karaoke } from '../model/karaoke';

@Component({
  selector: 'app-karaoke',
  standalone: true,
  imports: [],
  templateUrl: './karaoke.component.html',
  styleUrl: './karaoke.component.css'
})
export class KaraokeComponent implements OnInit{

  songs : Karaoke[] = [];

  constructor(private karaokeService: KaraokeService){}

  ngOnInit(): void {
    this.karaokeService.getSongs().subscribe({
      next: (songsObject) => {
        // Converti l'oggetto in un array di valori (i tuoi film)
        this.songs = Object.values(songsObject);
      },
      error: err => console.error(err)
    });
  }

}
