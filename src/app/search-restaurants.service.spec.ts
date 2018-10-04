import { TestBed } from '@angular/core/testing';

import { SearchRestaurantsService } from './search-restaurants.service';

describe('SearchRestaurantsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchRestaurantsService = TestBed.get(SearchRestaurantsService);
    expect(service).toBeTruthy();
  });
});
