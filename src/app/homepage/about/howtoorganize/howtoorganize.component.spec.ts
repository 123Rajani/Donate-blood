import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowtoorganizeComponent } from './howtoorganize.component';

describe('HowtoorganizeComponent', () => {
  let component: HowtoorganizeComponent;
  let fixture: ComponentFixture<HowtoorganizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HowtoorganizeComponent]
    });
    fixture = TestBed.createComponent(HowtoorganizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
