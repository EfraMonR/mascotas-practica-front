import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  login() {
    if (this.email && this.password) {
      this.loginService.login(this.email, this.password).subscribe(response => {
        console.log('Login exitoso', response);
        this.router.navigate(['/viewer']).then(() => {
          console.log('Navegación a viewer completa');
        }).catch(err => {
          console.error('Error de navegación', err);
        });
      }, error => {
        console.error('Error al iniciar sesión', error);
      });
    } else {
      console.error('Por favor, complete todos los campos');
    }
  }
}
