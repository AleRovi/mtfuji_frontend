import { mergeNsAndName } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
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
    this.router.navigate(['/booking']);
  }
}
