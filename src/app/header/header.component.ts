import { mergeNsAndName } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router) { }

  navigateToFoodMenu() {
    this.router.navigate(['/food']);
  }

  navigateToHome() {
    this.router.navigate(['']);
  }

  navigateToFilms() {
    this.router.navigate(['/films']);
  }

  navigateToBeverage() {
    this.router.navigate(['/beverage']);
  }

}
