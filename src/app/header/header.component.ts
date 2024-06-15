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

  constructor(private router: Router){}

  navigateToMenu() {
    this.router.navigate(['/menu']);
  }

  navigateToHome(){
    this.router.navigate(['']);
  }

}
