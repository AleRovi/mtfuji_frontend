import { Component, Input, OnInit } from '@angular/core';
import { BeverageService } from '../service/beverage.service';
import { RouterModule } from '@angular/router';
import { MenuBeverage } from '../model/menuBeverage';

@Component({
  selector: 'app-menu-beverage',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu-beverage.component.html',
  styleUrl: './menu-beverage.component.css'
})
export class MenuBeverageComponent implements OnInit{

  basePath = "images/beverage/";
  menuBeverage : MenuBeverage | null = null;

  constructor(private beverageService : BeverageService){ }

  getImagePath(imageName: string) : string{
    return this.basePath + imageName;
  }

  ngOnInit(): void {
    this.beverageService.getMenu().subscribe( {
      next: gm => this.menuBeverage = gm,
      error: err => console.log(err)
    });
  }

  trackByFn (index: number, item: any): any{
    return item.id;
  }
}
