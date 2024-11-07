import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private router: Router) {}

  toRegisterInfluencer(): void {
    this.router.navigate(['/register-influencer']);
  }

  toRegisterCompany(): void {
        this.router.navigate(['/register-company']);
  }

}