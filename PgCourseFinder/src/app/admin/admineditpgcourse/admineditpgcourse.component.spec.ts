import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditpgcourseComponent } from './admineditpgcourse.component';

describe('AdmineditpgcourseComponent', () => {
  let component: AdmineditpgcourseComponent;
  let fixture: ComponentFixture<AdmineditpgcourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmineditpgcourseComponent]
    });
    fixture = TestBed.createComponent(AdmineditpgcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
