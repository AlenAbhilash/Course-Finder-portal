import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditugcourseComponent } from './admineditugcourse.component';

describe('AdmineditugcourseComponent', () => {
  let component: AdmineditugcourseComponent;
  let fixture: ComponentFixture<AdmineditugcourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmineditugcourseComponent]
    });
    fixture = TestBed.createComponent(AdmineditugcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
