import { TestBed } from '@angular/core/testing';

import { StatestoregeService } from './statestorege.service';

describe('StatestoregeService', () => {
  let service: StatestoregeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatestoregeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
