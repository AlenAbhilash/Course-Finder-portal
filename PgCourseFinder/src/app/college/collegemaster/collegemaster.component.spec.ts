import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegemasterComponent } from './collegemaster.component';

describe('CollegemasterComponent', () => {
  let component: CollegemasterComponent;
  let fixture: ComponentFixture<CollegemasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollegemasterComponent]
    });
    fixture = TestBed.createComponent(CollegemasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
