import { Component } from '@angular/core';
import {MatSidenavContainer} from "@angular/material/sidenav";
import {MatToolbar} from "@angular/material/toolbar";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";
import {MatLine} from "@angular/material/core";
import {MatSidenavContent} from "@angular/material/sidenav";
import {MatSidenav} from "@angular/material/sidenav";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatSidenavContainer,
    MatToolbar,
    MatListItem,
    MatNavList,
    MatIcon,
    MatLine,
    MatSidenavContent,
    MatSidenav
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
