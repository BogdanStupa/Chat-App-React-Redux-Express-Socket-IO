import { TestBed } from '@angular/core/testing';

import { HttpErrorHandingInterceptor } from './http-error-handing.interceptor';

describe('ErrorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpErrorHandingInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpErrorHandingInterceptor = TestBed.inject(HttpErrorHandingInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
