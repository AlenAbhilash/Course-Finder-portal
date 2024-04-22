import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincollegeseatcoursereportComponent } from './admincollegeseatcoursereport.component';

describe('AdmincollegeseatcoursereportComponent', () => {
  let component: AdmincollegeseatcoursereportComponent;
  let fixture: ComponentFixture<AdmincollegeseatcoursereportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdmincollegeseatcoursereportComponent]
    });
    fixture = TestBed.createComponent(AdmincollegeseatcoursereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
