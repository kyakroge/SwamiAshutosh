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
faMusic = faMusic
}
