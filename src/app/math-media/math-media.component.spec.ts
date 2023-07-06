import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathMediaComponent } from './math-media.component';

describe('MathMediaComponent', () => {
  let component: MathMediaComponent;
  let fixture: ComponentFixture<MathMediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MathMediaComponent]
    });
    fixture = TestBed.createComponent(MathMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
