import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit, AfterViewInit {
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
  ];
  ngAfterViewInit(): void {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scroll(0, 0);
      })
  }
}
