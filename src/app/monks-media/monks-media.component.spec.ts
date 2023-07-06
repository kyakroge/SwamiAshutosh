import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonksMediaComponent } from './monks-media.component';

describe('MonksMediaComponent', () => {
  let component: MonksMediaComponent;
  let fixture: ComponentFixture<MonksMediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonksMediaComponent]
    });
    fixture = TestBed.createComponent(MonksMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
