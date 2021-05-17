import { TestBed } from '@angular/core/testing';

import { TelivisionsDataService } from './telivisions-data.service';

describe('TelivisionsDataService', () => {
  let service: TelivisionsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelivisionsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
