import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MahamandaleswarCardComponent } from './mahamandaleswar-card.component';

describe('MahamandaleswarCardComponent', () => {
  let component: MahamandaleswarCardComponent;
  let fixture: ComponentFixture<MahamandaleswarCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MahamandaleswarCardComponent]
    });
    fixture = TestBed.createComponent(MahamandaleswarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
