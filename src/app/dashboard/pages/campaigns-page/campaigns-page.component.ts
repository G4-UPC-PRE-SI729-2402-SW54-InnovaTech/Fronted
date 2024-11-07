import { Component } from '@angular/core';
import {SidebarModelComponent} from "../../components/sidebar-model/sidebar-model.component";


@Component({
  selector: 'app-campaigns-page',
  standalone: true,
  imports: [
    SidebarModelComponent
  ],
  templateUrl: './campaigns-page.component.html',
  styleUrl: './campaigns-page.component.css'
})
export class CampaignsPageComponent {

}
