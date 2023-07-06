import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-arti-stuti',
  templateUrl: './arti-stuti.component.html',
  styleUrls: ['./arti-stuti.component.scss']
})
export class ArtiStutiComponent implements OnInit, AfterViewInit{
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