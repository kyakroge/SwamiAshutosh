import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DharmikYojnaComponent } from './dharmik-yojna.component';

describe('DharmikYojnaComponent', () => {
  let component: DharmikYojnaComponent;
  let fixture: ComponentFixture<DharmikYojnaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DharmikYojnaComponent]
    });
    fixture = TestBed.createComponent(DharmikYojnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
