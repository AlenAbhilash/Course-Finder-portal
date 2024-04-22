import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegebookingremarkComponent } from './collegebookingremark.component';

describe('CollegebookingremarkComponent', () => {
  let component: CollegebookingremarkComponent;
  let fixture: ComponentFixture<CollegebookingremarkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollegebookingremarkComponent]
    });
    fixture = TestBed.createComponent(CollegebookingremarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
