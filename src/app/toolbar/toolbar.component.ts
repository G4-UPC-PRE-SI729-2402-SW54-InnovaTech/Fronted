import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  standalone: true,
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  buttonLabel: string = 'Register';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.router.url === '/login') {
          this.buttonLabel = 'Register';
        } else {
          this.buttonLabel = 'Log In';
        }
      }
    });
  }


  navigateToAction() {
    if (this.buttonLabel === 'Register') {
      this.router.navigate(['/register']);
    } else {
      this.router.navigate(['/login']);
    }
  }
}


