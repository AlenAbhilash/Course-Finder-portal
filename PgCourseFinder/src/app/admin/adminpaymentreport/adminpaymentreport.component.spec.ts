import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpaymentreportComponent } from './adminpaymentreport.component';

describe('AdminpaymentreportComponent', () => {
  let component: AdminpaymentreportComponent;
  let fixture: ComponentFixture<AdminpaymentreportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminpaymentreportComponent]
    });
    fixture = TestBed.createComponent(AdminpaymentreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
