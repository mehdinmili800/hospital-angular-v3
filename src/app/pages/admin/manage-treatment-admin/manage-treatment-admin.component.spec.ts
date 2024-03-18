import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTreatmentAdminComponent } from './manage-treatment-admin.component';

describe('ManageTreatmentAdminComponent', () => {
  let component: ManageTreatmentAdminComponent;
  let fixture: ComponentFixture<ManageTreatmentAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageTreatmentAdminComponent]
    });
    fixture = TestBed.createComponent(ManageTreatmentAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
