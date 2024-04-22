import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserseatregComponent } from './userseatreg.component';

describe('UserseatregComponent', () => {
  let component: UserseatregComponent;
  let fixture: ComponentFixture<UserseatregComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserseatregComponent]
    });
    fixture = TestBed.createComponent(UserseatregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
