import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-company',
  standalone: true,
  imports: [],
  templateUrl: './register-company.component.html',
  styleUrl: './register-company.component.css'
})
export class RegisterCompanyComponent {
  constructor(private router: Router) {}

  toLogin(): void {
    this.router.navigate(['/login']);
  }


}
