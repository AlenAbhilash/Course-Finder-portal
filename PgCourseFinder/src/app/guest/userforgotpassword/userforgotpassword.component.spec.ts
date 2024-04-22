import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserforgotpasswordComponent } from './userforgotpassword.component';

describe('UserforgotpasswordComponent', () => {
  let component: UserforgotpasswordComponent;
  let fixture: ComponentFixture<UserforgotpasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserforgotpasswordComponent]
    });
    fixture = TestBed.createComponent(UserforgotpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
