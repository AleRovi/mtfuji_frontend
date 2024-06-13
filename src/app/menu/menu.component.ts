import { Component } from '@angular/core';
import { MenuCardComponent } from '../menu-card/menu-card.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenuCardComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
