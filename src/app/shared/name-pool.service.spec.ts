import { TestBed, inject } from '@angular/core/testing';

import { NamePoolService } from './name-pool.service';

describe('NamePoolService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NamePoolService]
    });
  });

  it('should be created', inject([NamePoolService], (service: NamePoolService) => {
    expect(service).toBeTruthy();
  }));
});
