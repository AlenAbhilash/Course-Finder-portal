import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegehomeComponent } from './collegehome.component';

describe('CollegehomeComponent', () => {
  let component: CollegehomeComponent;
  let fixture: ComponentFixture<CollegehomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollegehomeComponent]
    });
    fixture = TestBed.createComponent(CollegehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
