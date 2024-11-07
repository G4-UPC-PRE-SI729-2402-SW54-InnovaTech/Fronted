import { Component } from '@angular/core';
import {SidebarModelComponent} from "../../components/sidebar-model/sidebar-model.component";
import {CampaignsComponent} from "../../components/campaigns/campaigns.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
    imports: [
        SidebarModelComponent,
        CampaignsComponent
    ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
