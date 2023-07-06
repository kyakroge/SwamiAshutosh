import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GurukulMediaComponent } from './gurukul-media.component';

describe('GurukulMediaComponent', () => {
  let component: GurukulMediaComponent;
  let fixture: ComponentFixture<GurukulMediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GurukulMediaComponent]
    });
    fixture = TestBed.createComponent(GurukulMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
