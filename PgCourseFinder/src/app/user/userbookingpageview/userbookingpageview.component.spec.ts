import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserbookingpageviewComponent } from './userbookingpageview.component';

describe('UserbookingpageviewComponent', () => {
  let component: UserbookingpageviewComponent;
  let fixture: ComponentFixture<UserbookingpageviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserbookingpageviewComponent]
    });
    fixture = TestBed.createComponent(UserbookingpageviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
