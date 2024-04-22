import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminugcourseviewComponent } from './adminugcourseview.component';

describe('AdminugcourseviewComponent', () => {
  let component: AdminugcourseviewComponent;
  let fixture: ComponentFixture<AdminugcourseviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminugcourseviewComponent]
    });
    fixture = TestBed.createComponent(AdminugcourseviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
