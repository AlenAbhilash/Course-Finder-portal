import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegepossiblecourseviewComponent } from './collegepossiblecourseview.component';

describe('CollegepossiblecourseviewComponent', () => {
  let component: CollegepossiblecourseviewComponent;
  let fixture: ComponentFixture<CollegepossiblecourseviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollegepossiblecourseviewComponent]
    });
    fixture = TestBed.createComponent(CollegepossiblecourseviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
