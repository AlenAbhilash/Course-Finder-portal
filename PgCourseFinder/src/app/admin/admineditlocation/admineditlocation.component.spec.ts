import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditlocationComponent } from './admineditlocation.component';

describe('AdmineditlocationComponent', () => {
  let component: AdmineditlocationComponent;
  let fixture: ComponentFixture<AdmineditlocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmineditlocationComponent]
    });
    fixture = TestBed.createComponent(AdmineditlocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
