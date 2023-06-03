import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './homepage/navbar/navbar.component';
import { BloodavailabilityComponent } from './homepage/bloodavailability/bloodavailability.component';
import { DonationCampaignsComponent } from './homepage/donation-campaigns/donation-campaigns.component';
import { NewsComponent } from './homepage/news/news.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DonorRegistrationComponent } from './donor-registration/donor-registration.component';
import { DonorProfileComponent } from './donor-profile/donor-profile.component';
import { OrganizerProfileComponent } from './organizer-profile/organizer-profile.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { BloodbankProfileComponent } from './bloodbank-profile/bloodbank-profile.component';
import { HowtodonateComponent } from './homepage/howtodonate/howtodonate.component';
import { HowtootganizeComponent } from './homepage/howtootganize/howtootganize.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    BloodavailabilityComponent,
    DonationCampaignsComponent,
    NewsComponent,
    LoginComponent,
    SignupComponent,
    DonorRegistrationComponent,
    DonorProfileComponent,
    OrganizerProfileComponent,
    AdminProfileComponent,
    BloodbankProfileComponent,
    HowtodonateComponent,
    HowtootganizeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
