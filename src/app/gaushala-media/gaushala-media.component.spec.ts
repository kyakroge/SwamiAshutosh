import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaushalaMediaComponent } from './gaushala-media.component';

describe('GaushalaMediaComponent', () => {
  let component: GaushalaMediaComponent;
  let fixture: ComponentFixture<GaushalaMediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GaushalaMediaComponent]
    });
    fixture = TestBed.createComponent(GaushalaMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
