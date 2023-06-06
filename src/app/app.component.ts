import { Component } from '@angular/core';
import { faCoffee, faMusic } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'Swami Ashutoshanand';
currentYear: any = 2023;
faMusic = faMusic;

isBhakti: boolean = true;
isBhakt:string='';
updateBhakt() {
  if (this.isBhakti==true) {
    this.isBhakti=false;
    this.isBhakt='Not a bhakt'
  } else {
    this.isBhakti=true;
    this.isBhakt='Bhakt'
  }
}
isDisabled: boolean = true;
getTrue() {
  this.isBhakti = true;
}
getFalse() {
  this.isBhakti = false;
}
isSubscribedToEmailsMessage: string = "true";
}
