import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintMediaComponent } from './print-media.component';

describe('PrintMediaComponent', () => {
  let component: PrintMediaComponent;
  let fixture: ComponentFixture<PrintMediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrintMediaComponent]
    });
    fixture = TestBed.createComponent(PrintMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
