import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercollegeviewmoreComponent } from './usercollegeviewmore.component';

describe('UsercollegeviewmoreComponent', () => {
  let component: UsercollegeviewmoreComponent;
  let fixture: ComponentFixture<UsercollegeviewmoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsercollegeviewmoreComponent]
    });
    fixture = TestBed.createComponent(UsercollegeviewmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
