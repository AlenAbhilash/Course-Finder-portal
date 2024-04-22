import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserfiltercollegeComponent } from './userfiltercollege.component';

describe('UserfiltercollegeComponent', () => {
  let component: UserfiltercollegeComponent;
  let fixture: ComponentFixture<UserfiltercollegeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserfiltercollegeComponent]
    });
    fixture = TestBed.createComponent(UserfiltercollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
