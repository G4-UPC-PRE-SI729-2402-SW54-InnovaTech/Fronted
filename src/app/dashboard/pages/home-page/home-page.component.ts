import { Component } from '@angular/core';
import {SidebarModelComponent} from "../../components/sidebar-model/sidebar-model.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
    imports: [
        SidebarModelComponent
    ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
