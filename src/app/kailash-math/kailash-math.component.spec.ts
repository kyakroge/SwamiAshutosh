import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KailashMathComponent } from './kailash-math.component';

describe('KailashMathComponent', () => {
  let component: KailashMathComponent;
  let fixture: ComponentFixture<KailashMathComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KailashMathComponent]
    });
    fixture = TestBed.createComponent(KailashMathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
