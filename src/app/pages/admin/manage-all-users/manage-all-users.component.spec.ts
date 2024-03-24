import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAllUsersComponent } from './manage-all-users.component';

describe('ManageAllUsersComponent', () => {
  let component: ManageAllUsersComponent;
  let fixture: ComponentFixture<ManageAllUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageAllUsersComponent]
    });
    fixture = TestBed.createComponent(ManageAllUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
