import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.scss']
})
export class AchievementsComponent implements OnInit, AfterViewInit {
  constructor(private router: Router) {

  }
  ngOnInit(): void {

  }
  imgUrls: String[] = [
    'https://ik.imagekit.io/kailash/swami-ashu/achievements/achieve-2.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/achievements/achieve-3.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/achievements/achieve-4.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/achievements/achieve-5.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/achievements/achieve-6.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/achievements/achieve-7.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/achievements/achieve-8.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/achievements/achieve-9.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/achievements/achieve-10.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/achievements/achieve-11.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/achievements/achieve-12.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/achievements/achieve-13.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/achievements/achieve-14.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/achievements/achieve-15.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/achievements/achieve-16.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/achievements/achieve-17.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/achievements/achieve-18.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/achievements/achieve-19.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/achievements/achieve-20.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/achievements/achieve-21.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/achievements/achieve-22.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/achievements/achieve-1.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/achievements/achieve-23.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/achievements/achieve-24.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/achievements/achieve-25.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/achievements/achieve-26.jpg?tr=q-1,pr-true',
    'https://ik.imagekit.io/kailash/swami-ashu/achievements/achieve-27.jpg?tr=q-1,pr-true'
  ];

  ngAfterViewInit(): void {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scroll(0, 0);
      })
  }
}