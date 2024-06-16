import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
<<<<<<< HEAD
import { MenuBeverageComponent } from './menu-beverage/menu-beverage.component';
=======
import { FilmsComponent } from './films/films.component';
<<<<<<< HEAD
>>>>>>> Sonia
=======
import { LoginComponent } from './login/login.component';
>>>>>>> origin/Sonia

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "menu", component: MenuComponent },
    { path: "register", component: RegisterComponent },
<<<<<<< HEAD
    { path: "menuBeverage", component: MenuBeverageComponent },
=======
    { path: "films", component: FilmsComponent },
<<<<<<< HEAD
>>>>>>> Sonia
=======
    { path: "login", component: LoginComponent },
>>>>>>> origin/Sonia
];
