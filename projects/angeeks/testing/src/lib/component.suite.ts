import { Suite } from './suite';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, fakeAsync, tick, ComponentFixture } from '@angular/core/testing';

export class ComponentSuite<T> extends Suite<T> {
  fixture: ComponentFixture<T>;
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
      const { declarations = [], ...rest } = options;
      this.fixture = TestBed.configureTestingModule({
        schemas: [ NO_ERRORS_SCHEMA ],
        ...rest,
        declarations: [
          ...declarations,
          this.Subject
        ]
      }).createComponent(this.Subject);
      tick();
      this.subject = this.fixture.componentInstance;
    }));
    this.expectCreated();
  }
}
