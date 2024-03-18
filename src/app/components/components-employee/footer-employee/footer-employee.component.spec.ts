import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterEmployeeComponent } from './footer-employee.component';

describe('FooterEmployeeComponent', () => {
  let component: FooterEmployeeComponent;
  let fixture: ComponentFixture<FooterEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterEmployeeComponent]
    });
    fixture = TestBed.createComponent(FooterEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
