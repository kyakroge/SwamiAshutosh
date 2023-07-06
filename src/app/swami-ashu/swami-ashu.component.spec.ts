import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwamiAshuComponent } from './swami-ashu.component';

describe('SwamiAshuComponent', () => {
  let component: SwamiAshuComponent;
  let fixture: ComponentFixture<SwamiAshuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwamiAshuComponent]
    });
    fixture = TestBed.createComponent(SwamiAshuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
