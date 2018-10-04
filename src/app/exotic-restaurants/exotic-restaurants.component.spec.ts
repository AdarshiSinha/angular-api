import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoticRestaurantsComponent } from './exotic-restaurants.component';

describe('ExoticRestaurantsComponent', () => {
  let component: ExoticRestaurantsComponent;
  let fixture: ComponentFixture<ExoticRestaurantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExoticRestaurantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoticRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
