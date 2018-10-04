import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedPlacesComponent } from './featured-places.component';

describe('FeaturedPlacesComponent', () => {
  let component: FeaturedPlacesComponent;
  let fixture: ComponentFixture<FeaturedPlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedPlacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedPlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
