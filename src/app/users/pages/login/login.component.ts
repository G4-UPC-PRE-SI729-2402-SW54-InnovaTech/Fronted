import { Component } from '@angular/core';
import { MatCardImage } from "@angular/material/card";
import { Router } from "@angular/router";
import { ConnexApiService } from "../../../shared/services/connex-api.service";
import { FormsModule } from "@angular/forms";
import { AuthService } from "../../../shared/services/auth.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatCardImage,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(
      private router: Router,
      private apiService: ConnexApiService,
      private authService: AuthService) {}

  onSendCode(): void {
    this.apiService.getUserByEmail(this.email).subscribe((user: any) => {
      if (user && user.passwordHash === this.password) {
        this.authService.login(user.id.toString());
      } else {
        alert('Invalid email or password');
      }
    }, error => {
      alert('Error fetching user data');
    });
  }

  toRegister(): void {
    this.router.navigate(['/register']);
  }
}