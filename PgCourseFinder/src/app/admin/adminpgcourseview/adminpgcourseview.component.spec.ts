import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpgcourseviewComponent } from './adminpgcourseview.component';

describe('AdminpgcourseviewComponent', () => {
  let component: AdminpgcourseviewComponent;
  let fixture: ComponentFixture<AdminpgcourseviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminpgcourseviewComponent]
    });
    fixture = TestBed.createComponent(AdminpgcourseviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
