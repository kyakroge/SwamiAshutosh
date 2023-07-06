import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-gurukul',
  templateUrl: './gurukul.component.html',
  styleUrls: ['./gurukul.component.scss']
})
export class GurukulComponent implements OnInit, AfterViewInit{
  constructor(private router:Router){
    
  }
  ngOnInit(): void {
    
  }
    ngAfterViewInit(): void {
    this.router.events
      .pipe(filter((event: any)=> event instanceof NavigationEnd))
      .subscribe(()=>{
        window.scroll(0,0);
      })
  }
}