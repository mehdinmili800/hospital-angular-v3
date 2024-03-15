import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSecondPatientComponent } from './form-second-patient.component';

describe('FormSecondPatientComponent', () => {
  let component: FormSecondPatientComponent;
  let fixture: ComponentFixture<FormSecondPatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormSecondPatientComponent]
    });
    fixture = TestBed.createComponent(FormSecondPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
