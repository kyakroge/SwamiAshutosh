import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightAsideComponent } from './right-aside.component';

describe('RightAsideComponent', () => {
  let component: RightAsideComponent;
  let fixture: ComponentFixture<RightAsideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightAsideComponent]
    });
    fixture = TestBed.createComponent(RightAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
