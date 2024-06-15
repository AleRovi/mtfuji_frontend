import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { FilmsComponent } from './films/films.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "menu", component: MenuComponent },
    { path: "register", component: RegisterComponent },
    { path: "films", component: FilmsComponent },
];
