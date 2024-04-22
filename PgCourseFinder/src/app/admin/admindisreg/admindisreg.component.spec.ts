import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindisregComponent } from './admindisreg.component';

describe('AdmindisregComponent', () => {
  let component: AdmindisregComponent;
  let fixture: ComponentFixture<AdmindisregComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmindisregComponent]
    });
    fixture = TestBed.createComponent(AdmindisregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
