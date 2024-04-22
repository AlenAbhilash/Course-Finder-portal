import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminconfirmationComponent } from './adminconfirmation.component';

describe('AdminconfirmationComponent', () => {
  let component: AdminconfirmationComponent;
  let fixture: ComponentFixture<AdminconfirmationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminconfirmationComponent]
    });
    fixture = TestBed.createComponent(AdminconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
