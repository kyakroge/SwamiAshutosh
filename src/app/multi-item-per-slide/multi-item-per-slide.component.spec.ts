import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiItemPerSlideComponent } from './multi-item-per-slide.component';

describe('MultiItemPerSlideComponent', () => {
  let component: MultiItemPerSlideComponent;
  let fixture: ComponentFixture<MultiItemPerSlideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiItemPerSlideComponent]
    });
    fixture = TestBed.createComponent(MultiItemPerSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
