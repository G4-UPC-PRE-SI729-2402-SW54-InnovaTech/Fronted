import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-influencer',
  standalone: true,
  imports: [],
  templateUrl: './register-influencer.component.html',
  styleUrl: './register-influencer.component.css'
})
export class RegisterInfluencerComponent {
  constructor(private router: Router) {}

  toLogin(): void {
    this.router.navigate(['/login']);
  }

}
