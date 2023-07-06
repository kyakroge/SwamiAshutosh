import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwamijiMediaComponent } from './swamiji-media.component';

describe('SwamijiMediaComponent', () => {
  let component: SwamijiMediaComponent;
  let fixture: ComponentFixture<SwamijiMediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwamijiMediaComponent]
    });
    fixture = TestBed.createComponent(SwamijiMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
