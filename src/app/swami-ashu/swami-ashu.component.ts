import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-swami-ashu',
  templateUrl: './swami-ashu.component.html',
  styleUrls: ['./swami-ashu.component.scss']
})
export class SwamiAshuComponent implements OnInit, AfterViewInit{
  constructor(private router:Router){}
  ngOnInit(): void {
    
  }
  imgUrls: String[] = [
    'https://ik.imagekit.io/kailash/swami-ashu/dslr/9J5A5459.JPG?updatedAt=1688405564255',
    'https://ik.imagekit.io/kailash/swami-ashu/dslr/9J5A5270.JPG?updatedAt=1686331007875',
    'https://ik.imagekit.io/kailash/swami-ashu/dslr/all/DSLR11.JPG?updatedAt=1688392999755',
  ]
  ngAfterViewInit(): void {
    this.router.events
      .pipe(filter((event: any)=> event instanceof NavigationEnd))
      .subscribe(()=>{
        window.scroll(0,0);
      })
  }
}
