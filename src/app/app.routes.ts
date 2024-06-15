import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { MenuBeverageComponent } from './menu-beverage/menu-beverage.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "menu", component: MenuComponent },
    { path: "register", component: RegisterComponent },
    { path: "menuBeverage", component: MenuBeverageComponent },
];
