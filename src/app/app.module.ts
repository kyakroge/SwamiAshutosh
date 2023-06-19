import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrandbarComponent } from './brandbar/brandbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FormsModule } from "@angular/forms";
import { RightAsideComponent } from './right-aside/right-aside.component';
import { LeftAsideComponent } from './left-aside/left-aside.component';
import { MathSampradayComponent } from './math-sampraday/math-sampraday.component';
import { JagadguruShankaracharyaComponent } from './jagadguru-shankaracharya/jagadguru-shankaracharya.component';
import { MathKaryakshetraComponent } from './math-karyakshetra/math-karyakshetra.component';
import { DharmikYojnaComponent } from './dharmik-yojna/dharmik-yojna.component';
import { MediaCoverageComponent } from './media-coverage/media-coverage.component';
import { KailashMathComponent } from './kailash-math/kailash-math.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MahamandaleswarCardComponent } from './mahamandaleswar-card/mahamandaleswar-card.component';
import { MultiItemPerSlideComponent } from './multi-item-per-slide/multi-item-per-slide.component';
import { DonationComponent } from './donation/donation.component';
import { PoojaBookingComponent } from './pooja-booking/pooja-booking.component';
import { LibraryComponent } from './library/library.component';
import { MagazineMembershipComponent } from './magazine-membership/magazine-membership.component';
import { RoomBookingComponent } from './room-booking/room-booking.component';
import { GaushalaComponent } from './gaushala/gaushala.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BrandbarComponent,
    RightAsideComponent,
    LeftAsideComponent,
    MathSampradayComponent,
    JagadguruShankaracharyaComponent,
    MathKaryakshetraComponent,
    DharmikYojnaComponent,
    MediaCoverageComponent,
    KailashMathComponent,
    PageNotFoundComponent,
    MahamandaleswarCardComponent,
    MultiItemPerSlideComponent,
    DonationComponent,
    PoojaBookingComponent,
    LibraryComponent,
    MagazineMembershipComponent,
    RoomBookingComponent,
    GaushalaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
