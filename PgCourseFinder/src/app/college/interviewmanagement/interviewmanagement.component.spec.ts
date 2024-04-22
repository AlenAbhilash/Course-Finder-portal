import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewmanagementComponent } from './interviewmanagement.component';

describe('InterviewmanagementComponent', () => {
  let component: InterviewmanagementComponent;
  let fixture: ComponentFixture<InterviewmanagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterviewmanagementComponent]
    });
    fixture = TestBed.createComponent(InterviewmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
