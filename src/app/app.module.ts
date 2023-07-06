import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

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
import { GurukulComponent } from './gurukul/gurukul.component';
import { NirmanSanghComponent } from './nirman-sangh/nirman-sangh.component';
import { PhotoPageComponent } from './photo-page/photo-page.component';
import { LeftColumnComponent } from './left-column/left-column.component';
import { PostsComponent } from './posts/posts.component';
import { PostCardComponent } from './post-card/post-card.component';
import { ArtiStutiComponent } from './arti-stuti/arti-stuti.component';
import { FooterComponent } from './footer/footer.component';
import { PrintMediaComponent } from './print-media/print-media.component';
import { MathMediaComponent } from './math-media/math-media.component';
import { SwamijiMediaComponent } from './swamiji-media/swamiji-media.component';
import { GurukulMediaComponent } from './gurukul-media/gurukul-media.component';
import { GaushalaMediaComponent } from './gaushala-media/gaushala-media.component';
import { SocialServicesMediaComponent } from './social-services-media/social-services-media.component';
import { KathaMediaComponent } from './katha-media/katha-media.component';
import { MonksMediaComponent } from './monks-media/monks-media.component';
import { SwamiAshuComponent } from './swami-ashu/swami-ashu.component';
import { SwamiRamchandraComponent } from './swami-ramchandra/swami-ramchandra.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { BooksComponent } from './books/books.component';

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
    GaushalaComponent,
    GurukulComponent,
    NirmanSanghComponent,
    PhotoPageComponent,
    LeftColumnComponent,
    PostsComponent,
    PostCardComponent,
    ArtiStutiComponent,
    FooterComponent,
    PrintMediaComponent,
    MathMediaComponent,
    SwamijiMediaComponent,
    GurukulMediaComponent,
    GaushalaMediaComponent,
    SocialServicesMediaComponent,
    KathaMediaComponent,
    MonksMediaComponent,
    SwamiAshuComponent,
    SwamiRamchandraComponent,
    AchievementsComponent,
    BooksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
