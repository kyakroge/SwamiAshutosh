import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NirmanSanghComponent } from './nirman-sangh.component';

describe('NirmanSanghComponent', () => {
  let component: NirmanSanghComponent;
  let fixture: ComponentFixture<NirmanSanghComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NirmanSanghComponent]
    });
    fixture = TestBed.createComponent(NirmanSanghComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
