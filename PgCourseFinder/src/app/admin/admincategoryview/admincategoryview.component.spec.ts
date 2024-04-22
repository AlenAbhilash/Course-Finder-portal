import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincategoryviewComponent } from './admincategoryview.component';

describe('AdmincategoryviewComponent', () => {
  let component: AdmincategoryviewComponent;
  let fixture: ComponentFixture<AdmincategoryviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmincategoryviewComponent]
    });
    fixture = TestBed.createComponent(AdmincategoryviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
