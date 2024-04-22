import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmineditdisComponent } from './admineditdis.component';

describe('AdmineditdisComponent', () => {
  let component: AdmineditdisComponent;
  let fixture: ComponentFixture<AdmineditdisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmineditdisComponent]
    });
    fixture = TestBed.createComponent(AdmineditdisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
