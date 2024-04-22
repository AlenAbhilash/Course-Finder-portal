import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeseatComponent } from './collegeseat.component';

describe('CollegeseatComponent', () => {
  let component: CollegeseatComponent;
  let fixture: ComponentFixture<CollegeseatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollegeseatComponent]
    });
    fixture = TestBed.createComponent(CollegeseatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
