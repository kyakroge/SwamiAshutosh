import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-monks-media',
  templateUrl: './monks-media.component.html',
  styleUrls: ['./monks-media.component.scss']
})
export class MonksMediaComponent implements OnInit, AfterViewInit{
    constructor(private router:Router){
      
    }
    ngOnInit(): void {
      
    }
    imgUrls: String[] = [
      'https://ik.imagekit.io/kailash/residing-mukhya-sant/raghavanand-ji.jpeg?updatedAt=1686747067356?tr=q-1,pr-true',
      'https://ik.imagekit.io/kailash/residing-mukhya-sant/anantanand.jpeg?updatedAt=1686747067268?tr=q-1,pr-true',
      'https://ik.imagekit.io/kailash/residing-mukhya-sant/vidyanand-giri.jpeg?updatedAt=1686747067189?tr=q-1,pr-true',
      'https://ik.imagekit.io/kailash/residing-mukhya-sant/swami-ajit-anand.jpeg?updatedAt=1686747067134?tr=q-1,pr-true',
      'https://ik.imagekit.io/kailash/monks/9J5A5409.JPG?updatedAt=1688376482037?tr=q-1,pr-true',
      'https://ik.imagekit.io/kailash/monks/9J5A5275.JPG?updatedAt=1688376480629?tr=q-1,pr-true',
      'https://ik.imagekit.io/kailash/monks/9J5A5464.JPG?updatedAt=1688376471496?tr=q-1,pr-true',
      'https://ik.imagekit.io/kailash/monks/9J5A5473.JPG?updatedAt=1688376463707?tr=q-1,pr-true',
      'https://ik.imagekit.io/kailash/monks/IMG_20230405_165846.jpg?updatedAt=1688376422545?tr=q-1,pr-true',
      'https://ik.imagekit.io/kailash/monks/IMG_20230405_185835.jpg?updatedAt=1688376403760?tr=q-1,pr-true',
      'https://ik.imagekit.io/kailash/monks/IMG_20230405_163720.jpg?updatedAt=1688376402753?tr=q-1,pr-true',
      'https://ik.imagekit.io/kailash/monks/IMG_20230405_123021.jpg?updatedAt=1688376380482?tr=q-1,pr-true',
      'https://ik.imagekit.io/kailash/monks/IMG_20230405_123020.jpg?updatedAt=1688376380263?tr=q-1,pr-true',
      'https://ik.imagekit.io/kailash/monks/swami-ashu-kuppaghat.jpeg?updatedAt=1688376351331?tr=q-1,pr-true',
      'https://ik.imagekit.io/kailash/monks/swami-ashu-walk.jpeg?updatedAt=1688376350325?tr=q-1,pr-true',
      'https://ik.imagekit.io/kailash/monks/ramchandra-ashu1.jpeg?updatedAt=1688376346093?tr=q-1,pr-true',
      'https://ik.imagekit.io/kailash/monks/WhatsApp_Image_2023-06-09_at_00.25.56.jpeg?updatedAt=1688376345854?tr=q-1',
  
    ];
      ngAfterViewInit(): void {
      this.router.events
        .pipe(filter((event: any)=> event instanceof NavigationEnd))
        .subscribe(()=>{
          window.scroll(0,0);
        })
    }
  }

