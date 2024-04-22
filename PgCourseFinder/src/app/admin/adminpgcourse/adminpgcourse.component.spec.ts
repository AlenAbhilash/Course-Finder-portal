import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpgcourseComponent } from './adminpgcourse.component';

describe('AdminpgcourseComponent', () => {
  let component: AdminpgcourseComponent;
  let fixture: ComponentFixture<AdminpgcourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminpgcourseComponent]
    });
    fixture = TestBed.createComponent(AdminpgcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
