import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-user-profile-button',
  standalone: true,
  imports: [],
  templateUrl: './user-profile-button.component.html',
  styleUrl: './user-profile-button.component.css'
})
export class UserProfileButtonComponent {
  @Input() userName: string = '';
  @Input() userPhotoUrl: string = '';

    constructor() {

    }


}
