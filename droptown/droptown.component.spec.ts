import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DroptownComponent } from './droptown.component';

describe('DroptownComponent', () => {
  let component: DroptownComponent;
  let fixture: ComponentFixture<DroptownComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DroptownComponent]
    });
    fixture = TestBed.createComponent(DroptownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
