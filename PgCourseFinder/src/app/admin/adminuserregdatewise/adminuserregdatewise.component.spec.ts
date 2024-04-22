import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminuserregdatewiseComponent } from './adminuserregdatewise.component';

describe('AdminuserregdatewiseComponent', () => {
  let component: AdminuserregdatewiseComponent;
  let fixture: ComponentFixture<AdminuserregdatewiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminuserregdatewiseComponent]
    });
    fixture = TestBed.createComponent(AdminuserregdatewiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
