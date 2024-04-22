import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserhomeComponent } from './userhome.component';

describe('UserhomeComponent', () => {
  let component: UserhomeComponent;
  let fixture: ComponentFixture<UserhomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserhomeComponent]
    });
    fixture = TestBed.createComponent(UserhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
