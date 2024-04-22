import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UesrpaymentviewComponent } from './uesrpaymentview.component';

describe('UesrpaymentviewComponent', () => {
  let component: UesrpaymentviewComponent;
  let fixture: ComponentFixture<UesrpaymentviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UesrpaymentviewComponent]
    });
    fixture = TestBed.createComponent(UesrpaymentviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
