import { TestBed } from '@angular/core/testing';

import { NavrelayService } from './navrelay.service';

describe('NavrelayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavrelayService = TestBed.get(NavrelayService);
    expect(service).toBeTruthy();
  });
});
