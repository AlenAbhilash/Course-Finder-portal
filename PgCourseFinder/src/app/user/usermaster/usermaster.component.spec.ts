import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermasterComponent } from './usermaster.component';

describe('UsermasterComponent', () => {
  let component: UsermasterComponent;
  let fixture: ComponentFixture<UsermasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsermasterComponent]
    });
    fixture = TestBed.createComponent(UsermasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
