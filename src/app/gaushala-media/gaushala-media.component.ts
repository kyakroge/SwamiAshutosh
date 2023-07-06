import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-gaushala-media',
  templateUrl: './gaushala-media.component.html',
  styleUrls: ['./gaushala-media.component.scss']
})
export class GaushalaMediaComponent implements OnInit, AfterViewInit {
  constructor(private router: Router) {

  }
  ngOnInit(): void {
  }
  imgUrls: String[] = [
    'https://ik.imagekit.io/kailash/gaushala/gaushala-yogi-adityanath-1.jpg?updatedAt=1688375215644?tr=q-1?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gaushala/gaushala-ravi-1.jpg?updatedAt=1688375233176?tr=q-1?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gaushala/gaushala-swami-1.jpg?updatedAt=1688375225824?tr=q-1?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gaushala/DSC09490.JPG?updatedAt=1688375262192?tr=q-1?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gaushala/DSC09487.JPG?updatedAt=1688375266028?tr=q-1?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gaushala/DSC09486.JPG?updatedAt=1688375267079?tr=q-1?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gaushala/DSC09488.JPG?updatedAt=1688375267659?tr=q-1?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gaushala/DSC09484.JPG?updatedAt=1688375268414?tr=q-1?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gaushala/DSC09489.JPG?updatedAt=1688375268989?tr=q-1?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/gaushala/DSC09485.JPG?updatedAt=1688375269132'

  ];
  ngAfterViewInit(): void {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scroll(0, 0);
      })
  }
}
