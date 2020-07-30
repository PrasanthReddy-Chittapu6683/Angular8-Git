import { TestBed } from '@angular/core/testing';

import { HttpServiceCallsService } from './http-service-calls.service';

describe('HttpServiceCallsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpServiceCallsService = TestBed.get(HttpServiceCallsService);
    expect(service).toBeTruthy();
  });
});
