import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegepossbileregComponent } from './collegepossbilereg.component';

describe('CollegepossbileregComponent', () => {
  let component: CollegepossbileregComponent;
  let fixture: ComponentFixture<CollegepossbileregComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollegepossbileregComponent]
    });
    fixture = TestBed.createComponent(CollegepossbileregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
