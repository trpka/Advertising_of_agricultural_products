import { TestBed } from '@angular/core/testing';

import { AuhtenticationService } from './auhtentication.service';

describe('AuhtenticationService', () => {
  let service: AuhtenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuhtenticationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
