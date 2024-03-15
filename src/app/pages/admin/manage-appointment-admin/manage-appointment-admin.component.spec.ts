import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAppointmentAdminComponent } from './manage-appointment-admin.component';

describe('ManageAppointmentAdminComponent', () => {
  let component: ManageAppointmentAdminComponent;
  let fixture: ComponentFixture<ManageAppointmentAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageAppointmentAdminComponent]
    });
    fixture = TestBed.createComponent(ManageAppointmentAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
