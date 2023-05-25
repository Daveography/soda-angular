import { TestBed } from '@angular/core/testing';

import { NgxSodaService } from './ngx-soda.service';

describe('NgxSodaService', () => {
  let service: NgxSodaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxSodaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
