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
import { GaushalaComponent } from './gaushala/gaushala.component';
import { GurukulComponent } from './gurukul/gurukul.component';
import { NirmanSanghComponent } from './nirman-sangh/nirman-sangh.component';
import { PhotoPageComponent } from './photo-page/photo-page.component';
import { PostsComponent } from './posts/posts.component';
import { ArtiStutiComponent } from './arti-stuti/arti-stuti.component';
import { PrintMediaComponent } from './print-media/print-media.component';
import { MonksMediaComponent } from './monks-media/monks-media.component';
import { KathaMediaComponent } from './katha-media/katha-media.component';
import { SocialServicesMediaComponent } from './social-services-media/social-services-media.component';
import { GaushalaMediaComponent } from './gaushala-media/gaushala-media.component';
import { MathMediaComponent } from './math-media/math-media.component';
import { SwamijiMediaComponent } from './swamiji-media/swamiji-media.component';
import { GurukulMediaComponent } from './gurukul-media/gurukul-media.component';
import { SwamiRamchandraComponent } from './swami-ramchandra/swami-ramchandra.component';
import { SwamiAshuComponent } from './swami-ashu/swami-ashu.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
  { path : 'math-sampraday', component: MathSampradayComponent, title: 'Math Sampraday'},
  { path : 'jagadguru-shankaracharya', component: JagadguruShankaracharyaComponent, title: 'Jagadguru Shankaracharya'},
  { path : 'math-karyakshetra', component: MathKaryakshetraComponent, title: 'Math Karyakshetra'},
  { path : 'dharmik-yojna', component: DharmikYojnaComponent, title : 'Dharmik Yojna'},
  { path : 'media-coverage', component: MediaCoverageComponent, title: 'MediaCoverage'},
  { path : 'kailash-math', component: KailashMathComponent, title: 'कैलाश मठ'},
  // { path : 'kailash-math', component: KailashMathComponent, title: 'Kailash Math'},
  { path : 'donation', component : DonationComponent, title: 'दान करें'},
  { path : 'pooja-booking', component : PoojaBookingComponent, title: 'पूजा बुकिंग'},
  { path : 'library', component : LibraryComponent, title: 'दान करें'},
  { path : 'magazine-membership', component : MagazineMembershipComponent, title: 'पत्रिका सदस्यता'},
  { path : 'room-booking', component : RoomBookingComponent, title: 'कमरा बुकिंग'},
  { path : 'gaushala', component : GaushalaComponent, title: 'गौशाला'},
  { path : 'gurukul', component : GurukulComponent, title: 'गुरुकुल'},
  { path : 'nirman-sangh', component : NirmanSanghComponent, title: 'निर्माण संघ'},
  { path : 'photo-page', component : PhotoPageComponent, title: 'फोटो गैलरी'},
  { path : 'posts', component : PostsComponent, title: 'शुभ विचार'},
  { path : 'aarti-stuti', component : ArtiStutiComponent, title: 'आरती स्तुति'},
  { path : 'print-media', component : PrintMediaComponent, title: 'प्रिंट मीडिया '},
  { path : 'math-media', component : MathMediaComponent, title: 'मठ'},
  { path : 'swamiji-media', component : SwamijiMediaComponent, title: 'स्वामी जी'},
  { path : 'monks-media', component : MonksMediaComponent, title: 'साधु संत'},
  { path : 'katha-media', component : KathaMediaComponent, title: 'प्रवचन कथा'},
  { path : 'social-services-media', component : SocialServicesMediaComponent, title: 'समाज सेवा'},
  { path : 'gaushala-media', component : GaushalaMediaComponent, title: 'गौशाला'},
  { path : 'gurukul-media', component : GurukulMediaComponent, title: 'गुरुकुल'},
  { path : 'ramchandra-giri', component : SwamiRamchandraComponent, title: 'स्वामी रामचंद्र गिरी जी महाराज'},
  { path : 'swami-ashu', component : SwamiAshuComponent, title: 'स्वामी आशुतोषानंद गिरी जी महाराज'},
  { path : 'books', component : BooksComponent, title: 'रचनायें'},
  { path : '', component : KailashMathComponent, title: 'कैलाश मठ'},
  { path : '**', component: PageNotFoundComponent, title: '404 Page not found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
