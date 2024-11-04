import { Component } from '@angular/core';
import {SidebarModelComponent} from "../../components/sidebar-model/sidebar-model.component";

@Component({
  selector: 'app-profiles-page',
  standalone: true,
    imports: [
        SidebarModelComponent
    ],
  templateUrl: './profiles-page.component.html',
  styleUrl: './profiles-page.component.css'
})
export class ProfilesPageComponent {

}
