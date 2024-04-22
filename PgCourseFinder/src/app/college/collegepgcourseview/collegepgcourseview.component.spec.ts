import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegepgcourseviewComponent } from './collegepgcourseview.component';

describe('CollegepgcourseviewComponent', () => {
  let component: CollegepgcourseviewComponent;
  let fixture: ComponentFixture<CollegepgcourseviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollegepgcourseviewComponent]
    });
    fixture = TestBed.createComponent(CollegepgcourseviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
