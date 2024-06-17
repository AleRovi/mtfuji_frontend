import { Component, Input, OnInit } from '@angular/core';
import { BeverageService } from '../service/beverage.service';
import { RouterModule } from '@angular/router';
import { Beverage } from '../model/beverage';
import { BeverageMenu } from '../model/beverage-menu';

@Component({
  selector: 'app-menu-beverage',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu-beverage.component.html',
  styleUrl: './menu-beverage.component.css'
})
export class MenuBeverageComponent implements OnInit{

  basePath = "images/beverage/";
  beverageMenu : BeverageMenu | null = null;

  constructor(private beverageService : BeverageService){ }

  getImagePath(imageName: string) : string{
    return this.basePath + imageName;
  }

  ngOnInit(): void {
    this.beverageService.getMenu().subscribe( {
      next: bm => this.beverageMenu = bm,
      error: err => console.log(err)
    });
  }
}
