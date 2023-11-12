import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekDaysComponent } from './week-days.component';

describe('WeekDaysComponent', () => {
  let component: WeekDaysComponent;
  let fixture: ComponentFixture<WeekDaysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeekDaysComponent]
    });
    fixture = TestBed.createComponent(WeekDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
