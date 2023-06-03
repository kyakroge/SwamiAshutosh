import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JagadguruShankaracharyaComponent } from './jagadguru-shankaracharya.component';

describe('JagadguruShankaracharyaComponent', () => {
  let component: JagadguruShankaracharyaComponent;
  let fixture: ComponentFixture<JagadguruShankaracharyaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JagadguruShankaracharyaComponent]
    });
    fixture = TestBed.createComponent(JagadguruShankaracharyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
