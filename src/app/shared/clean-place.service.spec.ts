import { TestBed } from '@angular/core/testing';

import { CleanPlaceService } from './clean-place.service';

describe('CleanPlaceService', () => {
  let service: CleanPlaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CleanPlaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
