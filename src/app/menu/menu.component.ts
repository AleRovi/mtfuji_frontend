import { Component, OnInit } from '@angular/core';
import { MenuCardComponent } from '../menu-card/menu-card.component';
import { Menu } from '../model/menu';
import { GeneralMenu } from '../model/generalMenu';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MenuCardComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{
  generalMenu : GeneralMenu | null = null;

  constructor(private foodService : FoodService){ }

  ngOnInit(): void {
    this.foodService.getMenu().subscribe( {
      next: gm => this.generalMenu = gm,
      error: err => console.log(err)
    });
  }

}
