import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CoachregComponent } from './coachreg/coachreg.component';
import { ClubregComponent } from './clubreg/clubreg.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResetpwComponent } from './resetpw/resetpw.component';
import { VerifyComponent } from './verify/verify.component'

const routes: Routes = [
  { path: 'register/clubreg', component: ClubregComponent},
  { path: 'register/coachreg', component: CoachregComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'reset', component: ResetpwComponent},
  { path: 'verify', component: VerifyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [
                                  LoginComponent,
                                  RegisterComponent,
                                  CoachregComponent,
                                  ClubregComponent,
                                  DashboardComponent
                                 ];
