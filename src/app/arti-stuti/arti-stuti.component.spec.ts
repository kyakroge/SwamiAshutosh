import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtiStutiComponent } from './arti-stuti.component';

describe('ArtiStutiComponent', () => {
  let component: ArtiStutiComponent;
  let fixture: ComponentFixture<ArtiStutiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtiStutiComponent]
    });
    fixture = TestBed.createComponent(ArtiStutiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
