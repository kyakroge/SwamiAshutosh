import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagazineMembershipComponent } from './magazine-membership.component';

describe('MagazineMembershipComponent', () => {
  let component: MagazineMembershipComponent;
  let fixture: ComponentFixture<MagazineMembershipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MagazineMembershipComponent]
    });
    fixture = TestBed.createComponent(MagazineMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
