import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsinfoComponent } from './patientsinfo.component';

describe('PatientsinfoComponent', () => {
  let component: PatientsinfoComponent;
  let fixture: ComponentFixture<PatientsinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientsinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
