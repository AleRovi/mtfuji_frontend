import { Component, Inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../service/login.service';
import { LoginInfo } from '../model/loginInfo';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router,private loginService: LoginService){}

  onSubmit(ngForm : NgForm){

    const loginInfo : LoginInfo = {
      ...ngForm.value
    };

    this.loginService.login(loginInfo).subscribe({
      next: (response) => {
        localStorage.setItem('token', response.token);
        alert('Login effettuata');
        this.router.navigate(['/login'])
      },
      error: err => {
        console.log(err); 
        alert('Errore durante il login');
      }});
  }
}
