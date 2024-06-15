import { Component, Input, OnInit } from "@angular/core";
import { User } from "../model/user";
import { UserService } from "../service/user.service";


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
onSubmit() {
throw new Error('Method not implemented.');
}
  @Input() user: User| null = null;

  constructor(private userservice : UserService,){}

  // onSubmit() {
  //   if (this.registerForm.valid) {
  //     // Crea un nuovo oggetto User dai valori del form
  //     const newUser: User = {
  //       id: null, // L'id sarà probabilmente generato dal backend
  //       ...this.registerForm.value
  //     };

  //     // Chiama il metodo saveUser() passando il nuovo oggetto User
  //     this.userservice.saveUser(newUser).subscribe({
  //       next: (data) => {
  //         console.log('Utente salvato', data);
  //       },
  //       error: (error) => {
  //         console.error('Errore nel salvataggio', error);
  //       }
  //     });
  //   } else {
  //     console.error('Form non valido');
  //   }
  // }


  // ngOnInit(): void {
  //   this.registerForm = new FormGroup({
  //     firstname: new FormControl(null, Validators.required),
  //     lastname: new FormControl(null, Validators.required),
  //     age: new FormControl(null, Validators.required),
  //     email: new FormControl(null, [Validators.required, Validators.email]),
  //     address: new FormControl(null, Validators.required),
  //     password: new FormControl(null, Validators.required),
  //     fidelity_card: new FormControl(null, Validators.required)
  //   });
  // }

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  // onSubmit() {
  //   if(this.user){
  //     this.userservice.saveUser(this.user).pipe(
  //       tap((response) => {
  //         console.log("done");
  //       }),
  //       catchError((error) => {
  //         console.log(error);
  //         return of(null); // Ritorna un Observable vuoto o gestisci come preferisci
  //       })
  //     ).subscribe();
  //   }
  // }
}

