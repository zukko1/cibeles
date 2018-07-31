import { TestBed, inject } from '@angular/core/testing';

import { TravelDateService } from './travel-date.service';

describe('TravelDateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TravelDateService]
    });
  });

  it('should be created', inject([TravelDateService], (service: TravelDateService) => {
    expect(service).toBeTruthy();
  }));
});
