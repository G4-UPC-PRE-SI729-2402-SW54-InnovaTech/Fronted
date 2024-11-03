import { Component } from '@angular/core';
import {CampaignsComponent} from "../campaigns/campaigns.component";
import {SidebarModelComponent} from "../../components/sidebar-model/sidebar-model.component";





@Component({
  selector: 'app-user-interface-main',
  standalone: true,
  imports: [
    CampaignsComponent,
    SidebarModelComponent
  ],
  templateUrl: './user-interface-main.component.html',
  styleUrl: './user-interface-main.component.css'
})
export class UserInterfaceMainComponent {

}
