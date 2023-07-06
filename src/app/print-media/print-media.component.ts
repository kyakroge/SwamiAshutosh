import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-print-media',
  templateUrl: './print-media.component.html',
  styleUrls: ['./print-media.component.scss']
})
export class PrintMediaComponent implements OnInit, AfterViewInit{
  constructor(private router:Router){
    
  }
  ngOnInit(): void {
    
  }
  imgUrls: String[] = [
    'https://ik.imagekit.io/kailash/print-media/swami-media24.jpeg?updatedAt=1688316534502?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/print-media/swami-media12.jpeg?updatedAt=1688316534362?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/print-media/swami-media13.jpeg?updatedAt=1688316534149?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/print-media/swami-media25.jpeg?updatedAt=1688316534092?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/print-media/swami-media1.jpeg?updatedAt=1688316534439?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/print-media/swami-media14.jpeg?updatedAt=1688316534072?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/print-media/swami-media22.jpeg?updatedAt=1688316532512?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/print-media/swami-media18.jpeg?updatedAt=1688316532492?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/print-media/swami-media7.jpeg?updatedAt=1688316532555?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/print-media/swami-media19.jpeg?updatedAt=1688316532432?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/print-media/swami-media6.jpeg?updatedAt=1688316531893?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/print-media/swami-media5.jpeg?updatedAt=1688316531872?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/print-media/swami-media23.jpeg?updatedAt=1688316531838?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/print-media/swami-media16.jpeg?updatedAt=1688316531539?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/print-media/swami-media15.jpeg?updatedAt=1688316531448?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/print-media/swami-media9.jpeg?updatedAt=1688316531440?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/print-media/swami-media4.jpeg?updatedAt=1688316528749?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/print-media/swami-media11.jpeg?updatedAt=1688316528707?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/print-media/swami-media3.jpeg?updatedAt=1688316528722?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/print-media/swami-media20.jpeg?updatedAt=1688316528666?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/print-media/swami-media21.jpeg?updatedAt=1688316528631?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/print-media/swami-media10.jpeg?updatedAt=1688316528628?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/print-media/swami-media17.jpeg?updatedAt=1688316528606?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/print-media/swami-media2.jpeg?updatedAt=1688316528600?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/print-media/swami-media8.jpeg?updatedAt=1688316528593?tr=q-1,pr-true'
    
  ];
  ngAfterViewInit(): void {
    this.router.events
      .pipe(filter((event: any)=> event instanceof NavigationEnd))
      .subscribe(()=>{
        window.scroll(0,0);
      })
  }
}
