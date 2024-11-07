import { Component } from '@angular/core';
import {UserProfileButtonComponent} from "../user-profile-button/user-profile-button.component";
import {ConnexApiService} from "../../../shared/services/connex-api.service";
import {jwtDecode} from "jwt-decode";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar-model',
  standalone: true,
    imports: [ UserProfileButtonComponent ],
  templateUrl: './sidebar-model.component.html',
  styleUrl: './sidebar-model.component.css'
})
export class SidebarModelComponent {
  userName: string = '';
  userPhotoUrl: string = '';

  constructor(
      private apiService: ConnexApiService,
      private router: Router,) {}

  ngOnInit() {
    const token = localStorage.getItem('authToken');
    if (token) {
      const decodedToken: any = jwtDecode(token);
      const userId = decodedToken.userId;

      this.apiService.getProfileByUserId(userId).subscribe((profile: any) => {
        this.userName = profile.brandName;
        this.userPhotoUrl = profile.profilePictureUrl;
      } , error => {
        console.error('Error fetching user profile data');
        this.userName = 'Create Your Profile';
        this.userPhotoUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtVJK8DFCxtQLMqwDkoLUkBs6xTxW3oAegTA&s';
      });
    }
  }

  onExit() {
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }



}
