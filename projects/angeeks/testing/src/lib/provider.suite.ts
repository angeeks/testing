import { Suite } from './suite';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { inject, TestBed, fakeAsync, tick, ComponentFixture } from '@angular/core/testing';

export class ProviderSuite<T> extends Suite<T> {
  static suite<S>(subject, fn) {
    this.on<S>(subject, fn);
  }
  static fsuite<S>(subject, fn) {
    this.fon<S>(subject, fn);
  }
  constructor(private Subject) {
    super();
  }
  init(options: any = {}) {
    beforeEach(fakeAsync(() => {
      const { providers = [], ...rest } = options;
      TestBed.configureTestingModule({
        schemas: [ NO_ERRORS_SCHEMA ],
        ...rest,
        providers: [
          ...providers,
          this.Subject
        ]
      });
    }));
    beforeEach(inject([this.Subject], (subject) => {
      this.subject = subject;
    }));
    this.expectCreated();
  }
}
