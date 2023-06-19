import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaushalaComponent } from './gaushala.component';

describe('GaushalaComponent', () => {
  let component: GaushalaComponent;
  let fixture: ComponentFixture<GaushalaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GaushalaComponent]
    });
    fixture = TestBed.createComponent(GaushalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
