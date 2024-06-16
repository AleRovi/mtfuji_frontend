import { Component, Input, OnInit } from '@angular/core';
import { MenuBeverage } from '../model/menuBeverage';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-beverage-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu-beverage-card.component.html',
  styleUrl: './menu-beverage-card.component.css'
})
export class MenuBeverageCardComponent implements OnInit{
  
  basePath = "images/beverage/";
  @Input() menuBeverage : MenuBeverage | null = null;

  getImagePath(imageName: string) : string{
    return this.basePath + imageName;
  }

  ngOnInit(): void {
    return;
  }
}
