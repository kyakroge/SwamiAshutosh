import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-swamiji-media',
  templateUrl: './swamiji-media.component.html',
  styleUrls: ['./swamiji-media.component.scss']
})
export class SwamijiMediaComponent implements OnInit, AfterViewInit {
  constructor(private router: Router) {

  }
  ngOnInit(): void {

  }
  imgUrls: String[] = [
    'https://ik.imagekit.io/kailash/vip-people/swamiji-famous-people1.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/vip-people/swamiji-famous-people2.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/vip-people/swamiji-famous-people3.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/vip-people/swamiji-famous-people4.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/vip-people/swamiji-famous-people5.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/vip-people/swamiji-famous-people6.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/vip-people/swamiji-famous-people7.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/vip-people/swamiji-famous-people8.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/vip-people/swamiji-famous-people9.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/vip-people/swamiji-famous-people10.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/yogiji-swamiji/5.jpeg?updatedAt=1688314326202?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/yogiji-swamiji/13.jpeg?updatedAt=1688314194862?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/_DSC8891.JPG?updatedAt=1686328610306?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/yogiji-swamiji/2.jpeg?updatedAt=1688314195154?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/dslr/all/DSLR1.JPG?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/dslr/all/S1.JPG?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/2/1.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/2/2.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/2/3.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/2/4.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/2/6.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/2/7.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/2/8.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/2/9.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/2/10.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/2/11.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/2/12.jpeg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/dslr/all/DSLR2.JPG?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/dslr/all/S2.JPG?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/dslr/all/DSLR3.JPG?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/dslr/all/S3.JPG?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/dslr/all/DSLR4.JPG?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/dslr/all/S4.JPG?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/dslr/all/DSLR5.JPG?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/dslr/all/S5.JPG?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/dslr/all/DSLR6.JPG?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/dslr/all/S6.JPG?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/dslr/all/DSLR7.JPG?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/dslr/all/S7.JPG?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/dslr/all/DSLR8.JPG?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/dslr/all/S8.JPG?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/dslr/all/DSLR9.JPG?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/dslr/all/S9.JPG?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/dslr/all/DSLR10.JPG?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/dslr/all/S10.JPG?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/dslr/all/DSLR11.JPG?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/dslr/all/S11.JPG?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/dslr/all/DSLR12.JPG?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/dslr/all/S12.JPG?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/dslr/all/DSLR13.JPG?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/dslr/all/S13.JPG?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/dslr/all/DSLR14.JPG?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/dslr/all/S14.JPG?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/dslr/all/DSLR15.JPG?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/dslr/all/S15.JPG?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/dslr/all/S16.JPG?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/dslr/all/S17.JPG?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/dslr/all/S18.JPG?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/dslr/all/S19.JPG?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/dslr/all/S20.JPG?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/dslr/9J5A5335.JPG?updatedAt=1686331011552?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/_DSC8888.JPG?updatedAt=1686328610157?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/yogiji-swamiji/12.jpeg?updatedAt=1688314194840?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/_DSC8738.JPG?updatedAt=1686328602164?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/yogiji-swamiji/15.jpeg?updatedAt=1688314192139?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/dslr/9J5A5270.JPG?updatedAt=1686331007875?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/yogiji-swamiji/14.jpeg?updatedAt=1688314192132?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/_DSC8466.JPG?updatedAt=1686328593269?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/utsav/swami-ash1.jpeg?updatedAt=1687179185746?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/_DSC8521.JPG?updatedAt=1686328597128?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/telegram/monks/ashu.jpeg?updatedAt=1686320655489?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/dslr/9J5A5292.JPG?updatedAt=1686331011044?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/dslr/9J5A5494.JPG?updatedAt=1686331016833?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/yogiji-swamiji/5.jpeg?updatedAt=1688314326202?tr=q-1,pr-true'
  ];

  ngAfterViewInit(): void {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scroll(0, 0);
      })
  }
}
