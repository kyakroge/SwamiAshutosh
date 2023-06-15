import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MathSampradayComponent } from "./math-sampraday/math-sampraday.component";
import { JagadguruShankaracharyaComponent } from "./jagadguru-shankaracharya/jagadguru-shankaracharya.component";
import { MathKaryakshetraComponent } from "./math-karyakshetra/math-karyakshetra.component";
import { DharmikYojnaComponent } from './dharmik-yojna/dharmik-yojna.component';
import { MediaCoverageComponent } from './media-coverage/media-coverage.component';
import { KailashMathComponent } from './kailash-math/kailash-math.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DonationComponent } from './donation/donation.component';
import { PoojaBookingComponent } from './pooja-booking/pooja-booking.component';
import { LibraryComponent } from './library/library.component';
import { MagazineMembershipComponent } from './magazine-membership/magazine-membership.component';
import { RoomBookingComponent } from './room-booking/room-booking.component';

const routes: Routes = [
  { path : 'math-sampraday', component: MathSampradayComponent, title: 'Math Sampraday'},
  { path : 'jagadguru-shankaracharya', component: JagadguruShankaracharyaComponent, title: 'Jagadguru Shankaracharya'},
  { path : 'math-karyakshetra', component: MathKaryakshetraComponent, title: 'Math Karyakshetra'},
  { path : 'dharmik-yojna', component: DharmikYojnaComponent, title : 'Dharmik Yojna'},
  { path : 'media-coverage', component: MediaCoverageComponent, title: 'MediaCoverage'},
  { path : 'kailash-math', component: KailashMathComponent, title: 'Kailash Math'},
  { path : 'kailash-math', component: KailashMathComponent, title: 'Kailash Math'},
  { path : 'donation', component : DonationComponent, title: 'दान करें'},
  { path : 'pooja-booking', component : PoojaBookingComponent, title: 'दान करें'},
  { path : 'library', component : LibraryComponent, title: 'दान करें'},
  { path : 'magazine-membership', component : MagazineMembershipComponent, title: 'दान करें'},
  { path : 'room-booking', component : RoomBookingComponent, title: 'दान करें'},
  { path : '**', component: PageNotFoundComponent, title: '404 Page not found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
