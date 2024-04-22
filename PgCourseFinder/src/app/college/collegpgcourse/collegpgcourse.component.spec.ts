import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegpgcourseComponent } from './collegpgcourse.component';

describe('CollegpgcourseComponent', () => {
  let component: CollegpgcourseComponent;
  let fixture: ComponentFixture<CollegpgcourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollegpgcourseComponent]
    });
    fixture = TestBed.createComponent(CollegpgcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
