import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeeditseatComponent } from './collegeeditseat.component';

describe('CollegeeditseatComponent', () => {
  let component: CollegeeditseatComponent;
  let fixture: ComponentFixture<CollegeeditseatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollegeeditseatComponent]
    });
    fixture = TestBed.createComponent(CollegeeditseatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
