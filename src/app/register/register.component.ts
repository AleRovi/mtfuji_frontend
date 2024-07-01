import { Component, OnInit } from "@angular/core";
import { User } from "../model/user";
import { FormsModule, NgForm } from "@angular/forms";
import { Router, RouterModule } from "@angular/router";
import { RegisterService } from "../service/register.service";
import { Register } from "../model/register";


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{

  currentUser : User | null = null;
  constructor(private userservice : RegisterService, private router : Router){}
  ngOnInit(): void {
    return;
  }

  onSubmit(ngForm : NgForm) {
    const currentUser : User ={
      firstname : ngForm.value.firstname,
      lastname : ngForm.value.lastname,
      age : ngForm.value.age,
      email : ngForm.value.email,
      address : ngForm.value.address,
      fidelity_card : ngForm.value.fidelity_card,
      password: ngForm.value.password
    }

     const register: Register = {
       user: currentUser,
       password: ngForm.value.password
     }
    
    this.userservice.saveUser(register).subscribe({
        next : (resp) => this.router.navigate(['/login']),
        error : (err) => console.log(err)
    });
     
     
  }
}

