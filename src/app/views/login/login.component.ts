import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  title = 'demoApp';
  email: string | undefined;
  password: string | undefined;
  remail: string | undefined;
  rpassword: string | undefined;
  rcpassword: string | undefined;

  constructor(private snackBar: MatSnackBar) {
  }

  register() {
  }

  login() {
    if (this.email == "admin" && this.password == "admin") {
      this.snackBar.open('Login Successful', '', { duration: 1000 })
    } else {
      this.snackBar.open('Login error', '', { duration: 1000 })
    }
  }

}
