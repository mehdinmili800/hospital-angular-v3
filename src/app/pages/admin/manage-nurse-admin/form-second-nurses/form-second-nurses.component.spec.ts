import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSecondNursesComponent } from './form-second-nurses.component';

describe('FormSecondNursesComponent', () => {
  let component: FormSecondNursesComponent;
  let fixture: ComponentFixture<FormSecondNursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormSecondNursesComponent]
    });
    fixture = TestBed.createComponent(FormSecondNursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
