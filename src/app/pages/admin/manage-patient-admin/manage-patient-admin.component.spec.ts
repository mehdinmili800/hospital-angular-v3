import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePatientAdminComponent } from './manage-patient-admin.component';

describe('ManagePatientAdminComponent', () => {
  let component: ManagePatientAdminComponent;
  let fixture: ComponentFixture<ManagePatientAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagePatientAdminComponent]
    });
    fixture = TestBed.createComponent(ManagePatientAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
