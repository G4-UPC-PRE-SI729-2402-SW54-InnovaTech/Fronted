import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexApiService } from '../../../shared/services/connex-api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-company',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register-company.component.html',
  styleUrl: './register-company.component.css'
})
export class RegisterCompanyComponent {
  name: string = '';
  industry: string = '';
  phoneNumber: string = '';
  website: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router, private apiService: ConnexApiService) {}

  register(): void {
    const companyData = {
      email: this.email,
      password: this.password,
      name: this.name,
      industry: this.industry,
      phoneNumber: this.phoneNumber,
      website: this.website
    };

    this.apiService.addCompany(companyData).subscribe(response => {
      alert('Registration successful');
      this.router.navigate(['/login']);
    }, error => {
      alert('Registration failed');
    });
  }

  toLogin(): void {
    this.router.navigate(['/login']);
  }
}