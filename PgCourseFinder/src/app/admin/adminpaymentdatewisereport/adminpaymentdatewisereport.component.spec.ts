import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpaymentdatewisereportComponent } from './adminpaymentdatewisereport.component';

describe('AdminpaymentdatewisereportComponent', () => {
  let component: AdminpaymentdatewisereportComponent;
  let fixture: ComponentFixture<AdminpaymentdatewisereportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminpaymentdatewisereportComponent]
    });
    fixture = TestBed.createComponent(AdminpaymentdatewisereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
