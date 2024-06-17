import { Component, Input, OnInit } from '@angular/core';
import { GeneralMenuBeverage } from '../model/generalMenuBeverage';
import { BeverageService } from '../service/beverage.service';
import { MenuBeverageCardComponent } from '../menu-beverage-card/menu-beverage-card.component';

@Component({
  selector: 'app-menu-beverage',
  standalone: true,
  imports: [MenuBeverageCardComponent],
  templateUrl: './menu-beverage.component.html',
  styleUrl: './menu-beverage.component.css'
})
export class MenuBeverageComponent implements OnInit{
  
  generalMenubeverage : GeneralMenuBeverage | null = null;

  constructor(private beverageService : BeverageService){ }

  ngOnInit(): void {
    this.beverageService.getMenu().subscribe( {
      next: gm => this.generalMenubeverage = gm,
      error: err => console.log(err)
    });
  }

  trackByFn (index: number, item: any): any{
    return item.id;
  }
}
