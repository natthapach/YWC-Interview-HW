import { TestBed, inject } from '@angular/core/testing';

import { SearchStatService } from './search-stat.service';

describe('SearchStatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchStatService]
    });
  });

  it('should be created', inject([SearchStatService], (service: SearchStatService) => {
    expect(service).toBeTruthy();
  }));
});
