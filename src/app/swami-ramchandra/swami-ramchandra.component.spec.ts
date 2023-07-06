import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwamiRamchandraComponent } from './swami-ramchandra.component';

describe('SwamiRamchandraComponent', () => {
  let component: SwamiRamchandraComponent;
  let fixture: ComponentFixture<SwamiRamchandraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwamiRamchandraComponent]
    });
    fixture = TestBed.createComponent(SwamiRamchandraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
