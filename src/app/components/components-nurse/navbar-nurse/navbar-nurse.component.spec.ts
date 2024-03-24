import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarNurseComponent } from './navbar-nurse.component';

describe('NavbarNurseComponent', () => {
  let component: NavbarNurseComponent;
  let fixture: ComponentFixture<NavbarNurseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarNurseComponent]
    });
    fixture = TestBed.createComponent(NavbarNurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
