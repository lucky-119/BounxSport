import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CoachregComponent } from './coachreg/coachreg.component';
import { ClubregComponent } from './clubreg/clubreg.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MastercalendarComponent } from './mastercalendar/mastercalendar.component';
import { MyclassesComponent } from './myclasses/myclasses.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ChatComponent } from './chat/chat.component';
import { HttpClientModule } from '@angular/common/http';
import { ResetpwComponent } from './resetpw/resetpw.component';
import { VerifyComponent } from './verify/verify.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    MastercalendarComponent,
    MyclassesComponent,
    MyprofileComponent,
    ChatComponent,
    ResetpwComponent,
    VerifyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
