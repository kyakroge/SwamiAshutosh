import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GurukulComponent } from './gurukul.component';

describe('GurukulComponent', () => {
  let component: GurukulComponent;
  let fixture: ComponentFixture<GurukulComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GurukulComponent]
    });
    fixture = TestBed.createComponent(GurukulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
