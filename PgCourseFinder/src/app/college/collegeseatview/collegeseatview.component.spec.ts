import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeseatviewComponent } from './collegeseatview.component';

describe('CollegeseatviewComponent', () => {
  let component: CollegeseatviewComponent;
  let fixture: ComponentFixture<CollegeseatviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollegeseatviewComponent]
    });
    fixture = TestBed.createComponent(CollegeseatviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
