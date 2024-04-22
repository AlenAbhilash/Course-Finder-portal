import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminuserreportComponent } from './adminuserreport.component';

describe('AdminuserreportComponent', () => {
  let component: AdminuserreportComponent;
  let fixture: ComponentFixture<AdminuserreportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminuserreportComponent]
    });
    fixture = TestBed.createComponent(AdminuserreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
