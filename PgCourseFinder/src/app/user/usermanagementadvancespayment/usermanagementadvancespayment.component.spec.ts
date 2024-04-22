import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermanagementadvancespaymentComponent } from './usermanagementadvancespayment.component';

describe('UsermanagementadvancespaymentComponent', () => {
  let component: UsermanagementadvancespaymentComponent;
  let fixture: ComponentFixture<UsermanagementadvancespaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsermanagementadvancespaymentComponent]
    });
    fixture = TestBed.createComponent(UsermanagementadvancespaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
