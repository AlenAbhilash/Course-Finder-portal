import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpossiblecourseviewComponent } from './adminpossiblecourseview.component';

describe('AdminpossiblecourseviewComponent', () => {
  let component: AdminpossiblecourseviewComponent;
  let fixture: ComponentFixture<AdminpossiblecourseviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminpossiblecourseviewComponent]
    });
    fixture = TestBed.createComponent(AdminpossiblecourseviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
