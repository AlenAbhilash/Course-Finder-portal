import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegebookingpageComponent } from './collegebookingpage.component';

describe('CollegebookingpageComponent', () => {
  let component: CollegebookingpageComponent;
  let fixture: ComponentFixture<CollegebookingpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollegebookingpageComponent]
    });
    fixture = TestBed.createComponent(CollegebookingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
