import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoojaBookingComponent } from './pooja-booking.component';

describe('PoojaBookingComponent', () => {
  let component: PoojaBookingComponent;
  let fixture: ComponentFixture<PoojaBookingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoojaBookingComponent]
    });
    fixture = TestBed.createComponent(PoojaBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
