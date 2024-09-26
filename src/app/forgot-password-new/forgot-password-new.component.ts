import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-forgot-password-new',
  standalone: true,
  imports: [],
  templateUrl: './forgot-password-new.component.html',
  styleUrl: './forgot-password-new.component.css'
})
export class ForgotPasswordNewComponent {
  constructor(private router: Router) {}

  onSendCode(): void {
    this.router.navigate(['/login']);
  }

}
