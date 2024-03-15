import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMedicinesAdminComponent } from './manage-medicines-admin.component';

describe('ManageMedicinesAdminComponent', () => {
  let component: ManageMedicinesAdminComponent;
  let fixture: ComponentFixture<ManageMedicinesAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManageMedicinesAdminComponent]
    });
    fixture = TestBed.createComponent(ManageMedicinesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
