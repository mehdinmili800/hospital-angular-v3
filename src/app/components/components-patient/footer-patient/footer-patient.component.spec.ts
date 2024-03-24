import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPatientComponent } from './footer-patient.component';

describe('FooterPatientComponent', () => {
  let component: FooterPatientComponent;
  let fixture: ComponentFixture<FooterPatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterPatientComponent]
    });
    fixture = TestBed.createComponent(FooterPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
