import { Component, Input, OnInit } from "@angular/core";
import { User } from "../model/user";
import { UserService } from "../service/user.service";
import { catchError, of, tap } from "rxjs";
import { FormsModule, NgForm } from "@angular/forms";


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private userservice : UserService,){}

  onSubmit(ngForm : NgForm) {
    console.log("mannaggia il clero");
    console.log(ngForm.value);
    const currentUser : User = {
      firstname : ngForm.value.firstname,
      lastname : ngForm.value.lastname,
      age : ngForm.value.age,
      email : ngForm.value.email,
      address : ngForm.value.address,
      fidelity_card : ngForm.value.fidelity_card,
      password : ngForm.value.password,
    }
    console.log(currentUser);
      this.userservice.saveUser(currentUser).pipe(
        tap(() => {
          console.log(ngForm.value);
        }),
        catchError((error: any) => {
          console.log(error);
          return of(null); // Ritorna un Observable vuoto o gestisci come preferisci
        })
      ).subscribe();
  }
}

