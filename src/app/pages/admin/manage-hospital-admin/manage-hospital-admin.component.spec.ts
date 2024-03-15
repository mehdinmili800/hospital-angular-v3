import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageHospitalAdminComponent } from './manage-hospital-admin.component';

describe('ManageHospitalAdminComponent', () => {
  let component: ManageHospitalAdminComponent;
  let fixture: ComponentFixture<ManageHospitalAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageHospitalAdminComponent]
    });
    fixture = TestBed.createComponent(ManageHospitalAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
