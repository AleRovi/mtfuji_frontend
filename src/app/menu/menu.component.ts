import { Component, Input, OnInit } from '@angular/core';
import { MenuCardComponent } from '../menu-card/menu-card.component';
import { GeneralMenu } from '../model/generalMenu';
import { FoodService } from '../service/food.service';

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
      next: gm => {
        this.generalMenu = gm;
        console.log(gm);
      },
      error: err => console.log(err)
    });
  }

  trackByFn (index: number, item: any): any{
    return item.id;
  }

}
