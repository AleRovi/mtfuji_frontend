import { Component, Input, OnInit } from '@angular/core';
import { FilmService } from '../service/film.service';
import { RouterModule } from '@angular/router';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-films',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './films.component.html',
  styleUrl: './films.component.css'
})
export class FilmsComponent implements OnInit{

  @Input() films : Movie[] = [];

  constructor(private filmService : FilmService){}

  // ngOnInit(): void {
  //   this.filmService.getFilms().subscribe({
  //     next: m => this.film = m,
  //     error: err => console.log(err)
  //   });
  // }

  ngOnInit(): void {
    this.filmService.getFilms().subscribe({
      next: (filmsObject) => {
        // Converti l'oggetto in un array di valori (i tuoi film)
        this.films = Object.values(filmsObject);
      },
      error: (err) => console.error(err)
    });
  }

  getImagePath(film : Movie): string {
    // Assuming you have a function to build the image path
    return `images/film/${film.imageName}`;
  }
}
