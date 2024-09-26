import { Component } from '@angular/core';
import {MatCardImage} from "@angular/material/card";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
    imports: [
        MatCardImage
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router) {}

  onSendCode(): void {
    this.router.navigate(['/user-interface-main']);
  }
  toRegister(): void {
    this.router.navigate(['/register']);
  }

}
