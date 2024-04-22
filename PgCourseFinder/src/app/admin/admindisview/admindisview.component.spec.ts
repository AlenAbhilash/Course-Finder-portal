import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindisviewComponent } from './admindisview.component';

describe('AdmindisviewComponent', () => {
  let component: AdmindisviewComponent;
  let fixture: ComponentFixture<AdmindisviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmindisviewComponent]
    });
    fixture = TestBed.createComponent(AdmindisviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
