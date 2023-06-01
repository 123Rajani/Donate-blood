import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './homepage/navbar/navbar.component';
import { BloodavailabilityComponent } from './homepage/bloodavailability/bloodavailability.component';
import { DonationCampaignsComponent } from './homepage/donation-campaigns/donation-campaigns.component';
import { NewsComponent } from './homepage/news/news.component';
import { AboutComponent } from './homepage/about/about.component';
import { LoginComponent } from './login/login.component';
import { HowtodonateComponent } from './homepage/about/howtodonate/howtodonate.component';
import { HowtoorganizeComponent } from './homepage/about/howtoorganize/howtoorganize.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    BloodavailabilityComponent,
    DonationCampaignsComponent,
    NewsComponent,
    AboutComponent,
    LoginComponent,
    HowtodonateComponent,
    HowtoorganizeComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
