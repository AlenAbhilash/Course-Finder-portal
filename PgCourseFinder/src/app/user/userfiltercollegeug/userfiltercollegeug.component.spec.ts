import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserfiltercollegeugComponent } from './userfiltercollegeug.component';

describe('UserfiltercollegeugComponent', () => {
  let component: UserfiltercollegeugComponent;
  let fixture: ComponentFixture<UserfiltercollegeugComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserfiltercollegeugComponent]
    });
    fixture = TestBed.createComponent(UserfiltercollegeugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
