import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-swami-ramchandra',
  templateUrl: './swami-ramchandra.component.html',
  styleUrls: ['./swami-ramchandra.component.scss']
})
export class SwamiRamchandraComponent implements OnInit, AfterViewInit{
  constructor(private router:Router){}
  ngOnInit(): void {
    
  }
  imgUrls: String[] = [
    'https://ik.imagekit.io/kailash/ramchandra-giri/rcgiri4-removebg-preview.png?updatedAt=1688458874412',
    'https://ik.imagekit.io/kailash/ramchandra-giri/rcgiri2.jpeg',
    'https://ik.imagekit.io/kailash/ramchandra-giri/rcgiri3.jpeg',
  ]
  ngAfterViewInit(): void {
    this.router.events
      .pipe(filter((event)=> event instanceof NavigationEnd))
      .subscribe(()=>{
        window.scroll(0,0);
      })
  }
}
