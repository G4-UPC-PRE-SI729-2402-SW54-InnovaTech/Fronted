import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {LoginComponent} from "./users/pages/login/login.component";
import {RegisterComponent} from "./users/pages/register/register.component";
import {RegisterInfluencerComponent} from "./users/pages/register-influencer/register-influencer.component";
import {RegisterCompanyComponent} from "./users/pages/register-company/register-company.component";

import {ForgotPasswordComponent} from "./users/pages/forgot-password/forgot-password.component";
import {ForgotPasswordCodeComponent} from "./users/pages/forgot-password-code/forgot-password-code.component";
import {ForgotPasswordNewComponent} from "./users/pages/forgot-password-new/forgot-password-new.component";

import {HomePageComponent} from "./dashboard/pages/home-page/home-page.component";
import {ProfilesPageComponent} from "./dashboard/pages/profiles-page/profiles-page.component";
import {CampaignsPageComponent} from "./dashboard/pages/campaigns-page/campaigns-page.component";
import {ConfigurationPageComponent} from "./dashboard/pages/configuration-page/configuration-page.component";
import {LandingPageComponent} from "./public/pages/landing-page/landing-page.component";




export const routes: Routes = [
  { path: 'landing', component: LandingPageComponent },

  { path: 'login', component: LoginComponent },

  { path: 'register', component: RegisterComponent },
  {path:'register-influencer', component: RegisterInfluencerComponent},
  {path:'register-company', component: RegisterCompanyComponent},

  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'forgot-password-code', component: ForgotPasswordCodeComponent },
  { path: 'forgot-password-new', component: ForgotPasswordNewComponent },

  { path: 'home', component: HomePageComponent},
  {path:'profiles', component: ProfilesPageComponent},
  {path:'campaigns', component: CampaignsPageComponent},
  {path:'configuration', component: ConfigurationPageComponent},

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

