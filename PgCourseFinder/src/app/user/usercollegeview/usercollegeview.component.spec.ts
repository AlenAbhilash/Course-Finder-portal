import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercollegeviewComponent } from './usercollegeview.component';

describe('UsercollegeviewComponent', () => {
  let component: UsercollegeviewComponent;
  let fixture: ComponentFixture<UsercollegeviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsercollegeviewComponent]
    });
    fixture = TestBed.createComponent(UsercollegeviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
