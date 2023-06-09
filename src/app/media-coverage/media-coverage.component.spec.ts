import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaCoverageComponent } from './media-coverage.component';

describe('MediaCoverageComponent', () => {
  let component: MediaCoverageComponent;
  let fixture: ComponentFixture<MediaCoverageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MediaCoverageComponent]
    });
    fixture = TestBed.createComponent(MediaCoverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
