import { TestBed } from '@angular/core/testing';

import { AuthentivationGuard } from './authentivation.guard';

describe('AuthentivationGuard', () => {
  let guard: AuthentivationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthentivationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
