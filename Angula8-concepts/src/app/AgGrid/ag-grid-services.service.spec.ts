import { TestBed } from '@angular/core/testing';

import { AgGridServicesService } from './ag-grid-services.service';

describe('AgGridServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AgGridServicesService = TestBed.get(AgGridServicesService);
    expect(service).toBeTruthy();
  });
});
