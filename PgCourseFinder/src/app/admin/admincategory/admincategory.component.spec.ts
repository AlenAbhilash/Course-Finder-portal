import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincategoryComponent } from './admincategory.component';

describe('AdmincategoryComponent', () => {
  let component: AdmincategoryComponent;
  let fixture: ComponentFixture<AdmincategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmincategoryComponent]
    });
    fixture = TestBed.createComponent(AdmincategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
