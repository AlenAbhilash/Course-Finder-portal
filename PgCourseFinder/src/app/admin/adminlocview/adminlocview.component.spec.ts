import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlocviewComponent } from './adminlocview.component';

describe('AdminlocviewComponent', () => {
  let component: AdminlocviewComponent;
  let fixture: ComponentFixture<AdminlocviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminlocviewComponent]
    });
    fixture = TestBed.createComponent(AdminlocviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
