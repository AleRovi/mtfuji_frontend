import { Component, OnInit } from '@angular/core';
import { KaraokeService } from '../service/karaoke.service';
import { Karaoke } from '../model/karaoke';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-karaoke',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './karaoke.component.html',
  styleUrl: './karaoke.component.css'
})
export class KaraokeComponent implements OnInit {

  songs: Karaoke[] = [];
  searchTerm: string = '';

  constructor(private karaokeService: KaraokeService, private router: Router) { }

  ngOnInit(): void {
    this.loadAllSongs();
  }

  loadAllSongs() {
    this.karaokeService.getSongs().subscribe({
      next: (songsObject) => {
        this.songs = Object.values(songsObject);
      },
      error: err => console.error(err)
    });
  }

  onSubmit(form: NgForm) {

    if (form.value.searchByTitleOrSinger != null) {

      this.karaokeService.searchTitleOrSinger(form.value.searchByTitleOrSinger).subscribe({
        next: (songsObject) => {
          this.songs = Object.values(songsObject);
        },
        error: err => {
          console.error(err),
          this.songs = [];
        }
      });
      this.router.navigate([`karaoke/${form.value.searchByTitleOrSinger}`]);
    }
    
  }
}
