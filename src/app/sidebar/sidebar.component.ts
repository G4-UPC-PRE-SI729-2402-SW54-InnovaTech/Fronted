import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl:  './sidebar.component.html',
  standalone: true,
  styleUrls: ['./sidebar.component.css'],
  imports: [CommonModule, FormsModule]
})
export class SidebarComponent {

}
