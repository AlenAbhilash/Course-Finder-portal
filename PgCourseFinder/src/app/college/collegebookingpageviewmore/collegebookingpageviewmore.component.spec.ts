import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegebookingpageviewmoreComponent } from './collegebookingpageviewmore.component';

describe('CollegebookingpageviewmoreComponent', () => {
  let component: CollegebookingpageviewmoreComponent;
  let fixture: ComponentFixture<CollegebookingpageviewmoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollegebookingpageviewmoreComponent]
    });
    fixture = TestBed.createComponent(CollegebookingpageviewmoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
