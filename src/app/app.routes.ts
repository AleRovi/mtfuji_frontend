import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { MenuBeverageComponent } from './menu-beverage/menu-beverage.component';
import { FilmsComponent } from './films/films.component';
import { LoginComponent } from './login/login.component';
import { KaraokeComponent } from './karaoke/karaoke.component';
import { BookingComponent } from './booking/booking.component';

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "foods", component: MenuComponent,},
    { path: "register", component: RegisterComponent },
    { path: "beverages", component: MenuBeverageComponent },
    { path: "films", component: FilmsComponent },
    { path: "login", component: LoginComponent },
    { path: "karaoke", component: KaraokeComponent },
    { path: "booking", component: BookingComponent },
];
