import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserseatbookingpiechartComponent } from './userseatbookingpiechart.component';

describe('UserseatbookingpiechartComponent', () => {
  let component: UserseatbookingpiechartComponent;
  let fixture: ComponentFixture<UserseatbookingpiechartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserseatbookingpiechartComponent]
    });
    fixture = TestBed.createComponent(UserseatbookingpiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
