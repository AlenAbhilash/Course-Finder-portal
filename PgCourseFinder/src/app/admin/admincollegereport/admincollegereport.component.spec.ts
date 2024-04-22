import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincollegereportComponent } from './admincollegereport.component';

describe('AdmincollegereportComponent', () => {
  let component: AdmincollegereportComponent;
  let fixture: ComponentFixture<AdmincollegereportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmincollegereportComponent]
    });
    fixture = TestBed.createComponent(AdmincollegereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
