import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProfilePatientComponent } from './create-profile-patient.component';

describe('CreateProfilePatientComponent', () => {
  let component: CreateProfilePatientComponent;
  let fixture: ComponentFixture<CreateProfilePatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateProfilePatientComponent]
    });
    fixture = TestBed.createComponent(CreateProfilePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
