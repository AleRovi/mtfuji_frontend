import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GeneralMenu } from '../model/generalMenu';
import { Menu } from '../model/menu';
import { Food } from '../model/food';

@Component({
  selector: 'app-menu-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu-card.component.html',
  styleUrl: './menu-card.component.css'
})
export class MenuCardComponent implements OnInit{
  basePath = "images/menu/";
  @Input() menu : Menu | null = null;

  getImagePath(food : Food) : string{
    return this.basePath + food.imageName;
  }

    ngOnInit(): void {
        return;
    }
}
