import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestloginComponent } from './guestlogin.component';

describe('GuestloginComponent', () => {
  let component: GuestloginComponent;
  let fixture: ComponentFixture<GuestloginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuestloginComponent]
    });
    fixture = TestBed.createComponent(GuestloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
