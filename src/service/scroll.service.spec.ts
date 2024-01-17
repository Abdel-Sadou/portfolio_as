import { TestBed } from '@angular/core/testing';

import { ScrollVisibilityService } from './scroll.service';

describe('ScrollService', () => {
  let service: ScrollVisibilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollVisibilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
