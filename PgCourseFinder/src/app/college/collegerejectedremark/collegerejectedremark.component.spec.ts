import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegerejectedremarkComponent } from './collegerejectedremark.component';

describe('CollegerejectedremarkComponent', () => {
  let component: CollegerejectedremarkComponent;
  let fixture: ComponentFixture<CollegerejectedremarkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollegerejectedremarkComponent]
    });
    fixture = TestBed.createComponent(CollegerejectedremarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
