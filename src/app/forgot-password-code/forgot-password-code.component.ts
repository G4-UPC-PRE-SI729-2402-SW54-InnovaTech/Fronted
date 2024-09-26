import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-forgot-password-code',
  standalone: true,
  imports: [],
  templateUrl: './forgot-password-code.component.html',
  styleUrl: './forgot-password-code.component.css'
})
export class ForgotPasswordCodeComponent {
  constructor(private router: Router) {}

  onSendCode(): void {
    this.router.navigate(['/forgot-password-new']);
  }
}
