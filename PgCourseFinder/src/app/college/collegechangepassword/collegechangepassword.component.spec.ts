import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegechangepasswordComponent } from './collegechangepassword.component';

describe('CollegechangepasswordComponent', () => {
  let component: CollegechangepasswordComponent;
  let fixture: ComponentFixture<CollegechangepasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollegechangepasswordComponent]
    });
    fixture = TestBed.createComponent(CollegechangepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
