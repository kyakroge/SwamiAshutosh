import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialServicesMediaComponent } from './social-services-media.component';

describe('SocialServicesMediaComponent', () => {
  let component: SocialServicesMediaComponent;
  let fixture: ComponentFixture<SocialServicesMediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialServicesMediaComponent]
    });
    fixture = TestBed.createComponent(SocialServicesMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
