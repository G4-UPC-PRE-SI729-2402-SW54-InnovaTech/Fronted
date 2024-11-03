import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {LoginComponent} from "./users/pages/login/login.component";
import {RegisterComponent} from "./users/pages/register/register.component";
import {ForgotPasswordComponent} from "./users/pages/forgot-password/forgot-password.component";
import {ForgotPasswordCodeComponent} from "./users/pages/forgot-password-code/forgot-password-code.component";
import {ForgotPasswordNewComponent} from "./users/pages/forgot-password-new/forgot-password-new.component";
import {UserInterfaceMainComponent} from "./dashboard/pages/user-interface-main/user-interface-main.component";
import {RegisterInfluencerComponent} from "./users/pages/register-influencer/register-influencer.component";
import {RegisterCompanyComponent} from "./users/pages/register-company/register-company.component";


export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'forgot-password-code', component: ForgotPasswordCodeComponent },
  { path: 'forgot-password-new', component: ForgotPasswordNewComponent },
  { path: 'user-interface-main', component: UserInterfaceMainComponent },
  {path:'register-influencer', component: RegisterInfluencerComponent},
  {path:'register-company', component: RegisterCompanyComponent},

  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

