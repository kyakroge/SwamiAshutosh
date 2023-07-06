import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-social-services-media',
  templateUrl: './social-services-media.component.html',
  styleUrls: ['./social-services-media.component.scss']
})
export class SocialServicesMediaComponent implements OnInit, AfterViewInit{
    constructor(private router:Router){
      
    }
    ngOnInit(): void {
      
    }
    imgUrls: String[] = [
      'https://ik.imagekit.io/kailash/social-works/social-work-1.jpeg?tr=q-1,pr-true',
  'https://ik.imagekit.io/kailash/social-works/social-work-2.jpeg?tr=q-1,pr-true',
  'https://ik.imagekit.io/kailash/social-works/social-work-3.jpeg?tr=q-1,pr-true',
  'https://ik.imagekit.io/kailash/social-works/social-work-4.jpeg?tr=q-1,pr-true',
  'https://ik.imagekit.io/kailash/social-works/social-work-5.jpeg?tr=q-1,pr-true',
  'https://ik.imagekit.io/kailash/social-works/social-work-6.jpeg?tr=q-1,pr-true',
  'https://ik.imagekit.io/kailash/social-works/social-work-7.jpeg?tr=q-1,pr-true',
  'https://ik.imagekit.io/kailash/social-works/social-work-8.jpeg?tr=q-1,pr-true',
  'https://ik.imagekit.io/kailash/social-works/social-work-9.jpeg?tr=q-1,pr-true',
  'https://ik.imagekit.io/kailash/social-works/social-work-10.jpg?tr=q-1,pr-true',
  'https://ik.imagekit.io/kailash/social-works/social-work-11.jpg?tr=q-1,pr-true',
  'https://ik.imagekit.io/kailash/social-works/social-work-12.jpg?tr=q-1,pr-true',
  'https://ik.imagekit.io/kailash/social-works/social-work-13.jpg?tr=q-1,pr-true',
  'https://ik.imagekit.io/kailash/social-works/social-work-14.jpg?tr=q-1,pr-true'
    ];
      ngAfterViewInit(): void {
      this.router.events
        .pipe(filter((event: any)=> event instanceof NavigationEnd))
        .subscribe(()=>{
          window.scroll(0,0);
        })
    }
  }
  
