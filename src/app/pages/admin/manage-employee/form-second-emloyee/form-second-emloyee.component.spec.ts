import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSecondEmloyeeComponent } from './form-second-emloyee.component';

describe('FormSecondEmloyeeComponent', () => {
  let component: FormSecondEmloyeeComponent;
  let fixture: ComponentFixture<FormSecondEmloyeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormSecondEmloyeeComponent]
    });
    fixture = TestBed.createComponent(FormSecondEmloyeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
