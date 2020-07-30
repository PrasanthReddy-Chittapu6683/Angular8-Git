import { TestBed } from '@angular/core/testing';

import { FakeBackendInterceptorService } from './fake-backend-interceptor.service';

describe('FakeBackendInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FakeBackendInterceptorService = TestBed.get(FakeBackendInterceptorService);
    expect(service).toBeTruthy();
  });
});
