import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlocregComponent } from './adminlocreg.component';

describe('AdminlocregComponent', () => {
  let component: AdminlocregComponent;
  let fixture: ComponentFixture<AdminlocregComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminlocregComponent]
    });
    fixture = TestBed.createComponent(AdminlocregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
