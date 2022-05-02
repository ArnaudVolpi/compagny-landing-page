import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtoutsComponent } from './atouts.component';

describe('AtoutsComponent', () => {
  let component: AtoutsComponent;
  let fixture: ComponentFixture<AtoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtoutsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
