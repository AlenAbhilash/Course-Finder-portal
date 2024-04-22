import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpossiblecourseComponent } from './adminpossiblecourse.component';

describe('AdminpossiblecourseComponent', () => {
  let component: AdminpossiblecourseComponent;
  let fixture: ComponentFixture<AdminpossiblecourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminpossiblecourseComponent]
    });
    fixture = TestBed.createComponent(AdminpossiblecourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
