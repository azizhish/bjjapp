import { TestBed, inject } from '@angular/core/testing';

import { ReguserService } from './reguser.service';

describe('ReguserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReguserService]
    });
  });

  it('should be created', inject([ReguserService], (service: ReguserService) => {
    expect(service).toBeTruthy();
  }));
});
