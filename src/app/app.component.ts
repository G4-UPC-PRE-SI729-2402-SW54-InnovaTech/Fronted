import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Connex';
  constructor(public router: Router) {}
}
