import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KathaMediaComponent } from './katha-media.component';

describe('KathaMediaComponent', () => {
  let component: KathaMediaComponent;
  let fixture: ComponentFixture<KathaMediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KathaMediaComponent]
    });
    fixture = TestBed.createComponent(KathaMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
