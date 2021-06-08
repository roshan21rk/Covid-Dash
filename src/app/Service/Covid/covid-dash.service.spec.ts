import { TestBed } from '@angular/core/testing';

import { CovidDashService } from './covid-dash.service';

describe('CovidDashService', () => {
  let service: CovidDashService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CovidDashService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
