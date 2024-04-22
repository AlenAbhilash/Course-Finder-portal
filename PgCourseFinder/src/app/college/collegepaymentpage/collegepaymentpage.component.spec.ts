import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegepaymentpageComponent } from './collegepaymentpage.component';

describe('CollegepaymentpageComponent', () => {
  let component: CollegepaymentpageComponent;
  let fixture: ComponentFixture<CollegepaymentpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollegepaymentpageComponent]
    });
    fixture = TestBed.createComponent(CollegepaymentpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
