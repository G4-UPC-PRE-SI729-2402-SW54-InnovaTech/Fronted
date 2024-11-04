import { Component } from '@angular/core';
import {SidebarModelComponent} from "../../components/sidebar-model/sidebar-model.component";

@Component({
  selector: 'app-configuration-page',
  standalone: true,
    imports: [
        SidebarModelComponent
    ],
  templateUrl: './configuration-page.component.html',
  styleUrl: './configuration-page.component.css'
})
export class ConfigurationPageComponent {

}
