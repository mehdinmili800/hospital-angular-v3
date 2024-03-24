import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarNurseComponent } from './sidebar-nurse.component';

describe('SidebarNurseComponent', () => {
  let component: SidebarNurseComponent;
  let fixture: ComponentFixture<SidebarNurseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarNurseComponent]
    });
    fixture = TestBed.createComponent(SidebarNurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
