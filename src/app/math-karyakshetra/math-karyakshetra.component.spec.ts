import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathKaryakshetraComponent } from './math-karyakshetra.component';

describe('MathKaryakshetraComponent', () => {
  let component: MathKaryakshetraComponent;
  let fixture: ComponentFixture<MathKaryakshetraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MathKaryakshetraComponent]
    });
    fixture = TestBed.createComponent(MathKaryakshetraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
