import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterNurseComponent } from './footer-nurse.component';

describe('FooterNurseComponent', () => {
  let component: FooterNurseComponent;
  let fixture: ComponentFixture<FooterNurseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterNurseComponent]
    });
    fixture = TestBed.createComponent(FooterNurseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
