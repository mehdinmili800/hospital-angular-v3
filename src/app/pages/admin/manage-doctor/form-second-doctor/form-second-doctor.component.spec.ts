import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSecondDoctorComponent } from './form-second-doctor.component';

describe('FormSecondDoctorComponent', () => {
  let component: FormSecondDoctorComponent;
  let fixture: ComponentFixture<FormSecondDoctorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormSecondDoctorComponent]
    });
    fixture = TestBed.createComponent(FormSecondDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
