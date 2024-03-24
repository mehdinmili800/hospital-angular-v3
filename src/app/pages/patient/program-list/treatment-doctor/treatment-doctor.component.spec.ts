import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentDoctorComponent } from './treatment-doctor.component';

describe('TreatmentDoctorComponent', () => {
  let component: TreatmentDoctorComponent;
  let fixture: ComponentFixture<TreatmentDoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TreatmentDoctorComponent]
    });
    fixture = TestBed.createComponent(TreatmentDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
