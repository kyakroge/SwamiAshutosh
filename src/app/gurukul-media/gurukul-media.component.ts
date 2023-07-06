import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-gurukul-media',
  templateUrl: './gurukul-media.component.html',
  styleUrls: ['./gurukul-media.component.scss']
})
export class GurukulMediaComponent implements OnInit, AfterViewInit{
  constructor(private router:Router){
    
  }
  ngOnInit(): void {
    
  }
  imgUrls: String[] = [
    'https://ik.imagekit.io/kailash/gurukul/gurukul-1.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gurukul/gurukul-2.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gurukul/gurukul-3.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gurukul/gurukul-4.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gurukul/gurukul-5.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gurukul/gurukul-6.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gurukul/gurukul-7.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gurukul/gurukul-8.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gurukul/gurukul-9.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gurukul/gurukul-10.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gurukul/gurukul-11.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gurukul/gurukul-12.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gurukul/gurukul-13.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gurukul/gurukul-14.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gurukul/gurukul-15.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gurukul/gurukul-16.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gurukul/gurukul-17.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gurukul/gurukul-18.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gurukul/gurukul-19.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gurukul/gurukul-20.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gurukul/gurukul-21.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gurukul/gurukul-22.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gurukul/gurukul-23.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gurukul/gurukul-24.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gurukul/gurukul-25.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gurukul/gurukul-26.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gurukul/gurukul-27.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gurukul/gurukul-28.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gurukul/gurukul-29.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gurukul/gurukul-30.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gurukul/gurukul-31.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gurukul/gurukul-32.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gurukul/gurukul-33.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gurukul/gurukul-34.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gurukul/gurukul-35.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gurukul/gurukul-36.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gurukul/gurukul-37.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gurukul/gurukul-38.jpeg?tr=q-1,pr-true'
    
  ];
  ngAfterViewInit(): void {
  this.router.events
    .pipe(filter((event: any)=> event instanceof NavigationEnd))
    .subscribe(()=>{
      window.scroll(0,0);
    })
  }
}
