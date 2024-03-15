import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageNurseAdminComponent } from './manage-nurse-admin.component';

describe('ManageNurseAdminComponent', () => {
  let component: ManageNurseAdminComponent;
  let fixture: ComponentFixture<ManageNurseAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageNurseAdminComponent]
    });
    fixture = TestBed.createComponent(ManageNurseAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
