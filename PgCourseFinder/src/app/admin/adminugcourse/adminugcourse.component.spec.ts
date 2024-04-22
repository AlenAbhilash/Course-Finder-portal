import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminugcourseComponent } from './adminugcourse.component';

describe('AdminugcourseComponent', () => {
  let component: AdminugcourseComponent;
  let fixture: ComponentFixture<AdminugcourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminugcourseComponent]
    });
    fixture = TestBed.createComponent(AdminugcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
