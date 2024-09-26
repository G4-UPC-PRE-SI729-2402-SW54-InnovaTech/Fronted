import { Component } from '@angular/core';
import {MatCardImage} from "@angular/material/card";

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

}
