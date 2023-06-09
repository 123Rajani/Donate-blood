import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodavailabilityComponent } from './bloodavailability.component';

describe('BloodavailabilityComponent', () => {
  let component: BloodavailabilityComponent;
  let fixture: ComponentFixture<BloodavailabilityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BloodavailabilityComponent]
    });
    fixture = TestBed.createComponent(BloodavailabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
