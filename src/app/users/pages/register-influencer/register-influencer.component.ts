import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConnexApiService } from '../../../shared/services/connex-api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-influencer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register-influencer.component.html',
  styleUrl: './register-influencer.component.css'
})
export class RegisterInfluencerComponent {
  name: string = '';
  lastName: string = '';
  phoneNumber: string = '';
  email: string = '';
  password: string = '';
  socialMediaLink: string = '';

  constructor(private router: Router, private apiService: ConnexApiService) {}

  register(): void {
    const influencerData = {
      email: this.email,
      password: this.password,
      firstName: this.name,
      lastName: this.lastName,
      phoneNumber: this.phoneNumber,
      socialMediaHandle: this.socialMediaLink
    };

    this.apiService.addInfluencer(influencerData).subscribe(response => {
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