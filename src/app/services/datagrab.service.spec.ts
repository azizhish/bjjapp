import { TestBed, inject } from '@angular/core/testing';

import { DatagrabService } from './datagrab.service';

describe('DatagrabService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DatagrabService]
    });
  });

  it('should be created', inject([DatagrabService], (service: DatagrabService) => {
    expect(service).toBeTruthy();
  }));
});
