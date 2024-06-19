import { mergeNsAndName } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router) { }

  navigateToFoodMenu() {
    this.router.navigate(['/foods']);
  }

  navigateToHome() {
    this.router.navigate(['']);
  }

  navigateToFilms() {
    this.router.navigate(['/films']);
  }

  navigateToBeverage() {
    this.router.navigate(['/beverages']);
  }

  navigateToKaraoke() {
    this.router.navigate(['/karaoke']);
  }

  navigateToBooking(){
    console.log("booking");
    this.router.navigate(['/booking']);
  }

  navigateToRoom(){
    this.router.navigate(['/room']);
  }
}
