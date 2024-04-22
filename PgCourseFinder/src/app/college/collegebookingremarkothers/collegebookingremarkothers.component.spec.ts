import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegebookingremarkothersComponent } from './collegebookingremarkothers.component';

describe('CollegebookingremarkothersComponent', () => {
  let component: CollegebookingremarkothersComponent;
  let fixture: ComponentFixture<CollegebookingremarkothersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollegebookingremarkothersComponent]
    });
    fixture = TestBed.createComponent(CollegebookingremarkothersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
