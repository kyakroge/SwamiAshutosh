import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathSampradayComponent } from './math-sampraday.component';

describe('MathSampradayComponent', () => {
  let component: MathSampradayComponent;
  let fixture: ComponentFixture<MathSampradayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MathSampradayComponent]
    });
    fixture = TestBed.createComponent(MathSampradayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
