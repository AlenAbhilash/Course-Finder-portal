import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserprofileeditComponent } from './userprofileedit.component';

describe('UserprofileeditComponent', () => {
  let component: UserprofileeditComponent;
  let fixture: ComponentFixture<UserprofileeditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserprofileeditComponent]
    });
    fixture = TestBed.createComponent(UserprofileeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
