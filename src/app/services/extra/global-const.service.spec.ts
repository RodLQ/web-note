import { TestBed } from '@angular/core/testing';

import { GlobalConstService } from './global-const.service';

describe('GlobalConstService', () => {
  let service: GlobalConstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalConstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
