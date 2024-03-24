import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseLayoutComponent } from './nurse-layout.component';

describe('NurseLayoutComponent', () => {
  let component: NurseLayoutComponent;
  let fixture: ComponentFixture<NurseLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NurseLayoutComponent]
    });
    fixture = TestBed.createComponent(NurseLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
