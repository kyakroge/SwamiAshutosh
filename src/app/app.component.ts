import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faCoffee, faMusic } from '@fortawesome/free-solid-svg-icons';
import { AppServiceService } from './app-service.service';
// import { SharedService } from './shared.service';
import { response } from 'express';

interface Blog {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  user: string;
  __v: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(private service: AppServiceService) {

  }

  ngOnInit() {
    this.getDataFromAPI();
  }


  getDataFromAPI() {
    this.service.getData().subscribe({
      next: (response: any) => {
        this.blogs = response.blogs;

        console.log(this.blogs[0].title);

      },
      error: (error) => {
        console.log("Error is: ", error);
      }
    }
    );
  }

  title = 'Swami Ashutoshanand';
  currentYear: any = 2023;
  faMusic = faMusic;

  isBhakti: boolean = true;
  isBhakt: string = '';
  updateBhakt() {
    if (this.isBhakti == true) {
      this.isBhakti = false;
      this.isBhakt = 'Not a bhakt'
    } else {
      this.isBhakti = true;
      this.isBhakt = 'Bhakt'
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
