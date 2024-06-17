import { Component, Input, OnInit } from "@angular/core";
import { User } from "../model/user";
import { catchError, of, tap } from "rxjs";
import { FormsModule, NgForm } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { Register } from "../model/register";
import { RegisterService } from "../service/register.service";


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  constructor(private userservice : RegisterService, private router : Router){}
  ngOnInit(): void {
    return;
  }

  onSubmit(ngForm : NgForm) {
    const currentUser : User = {
      firstname : ngForm.value.firstname,
      lastname : ngForm.value.lastname,
      age : ngForm.value.age,
      email : ngForm.value.email,
      address : ngForm.value.address,
      fidelity_card : ngForm.value.fidelity_card,
    }

    const register: Register = {
      user: currentUser,
      password: ngForm.value.password
    }
    
    this.userservice.saveUser(register).subscribe({
        next : () => {
          this.router.navigate(['/register']);
        },
        error : (err: string) => {
          console.log(err);
        }});

  }
}

