import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearcRestaurantsComponent } from './searc-restaurants.component';

describe('SearcRestaurantsComponent', () => {
  let component: SearcRestaurantsComponent;
  let fixture: ComponentFixture<SearcRestaurantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearcRestaurantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearcRestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
