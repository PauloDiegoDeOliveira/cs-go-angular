import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  title = 'Teste';
  email: string | undefined;
  password: string | undefined;
  remail: string | undefined;
  rpassword: string | undefined;
  rcpassword: string | undefined;

  constructor(private snackBar: MatSnackBar) {
  }

  registro() {
  }

  login() {
    if (this.email == "admin" && this.password == "admin") {
      this.snackBar.open('Login realizado com sucesso!', '', { duration: 2000 })
    } else {
      this.snackBar.open('Usuário ou senha inválido.', '', { duration: 2000 })
    }
  }

}
