import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, fakeAsync, tick, ComponentFixture } from '@angular/core/testing';

export class Suite<T> {
  static describe = describe;
  static fdescribe = fdescribe;
  fixture: ComponentFixture<T>;
  subject: T;
  static on<S>(Subject, fn) {
    this.run<S>(this.describe, Subject, fn);
  }
  static fon<S>(Subject, fn) {
    this.run<S>(this.fdescribe, Subject, fn);
  }
  private static run<S>(ctx, Subject, fn) {
    const subject = (typeof Subject) === 'string' ? Subject : this.suiteName(Subject);
    ctx(subject, () => {
      const spec = new this<S>(Subject);
      fn(spec);
    });
  }
  private static suiteName(subject) {
    if (subject['__annotations__']) {
      return subject['__annotations__'][0].selector;
    } else {
      return subject.name || 'No Name';
    }
  }
  constructor(private Subject) {
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
  }

  expectCreated() {
    it('should be created', () => {
      expect(this.subject).toBeTruthy();
    });
  }

  expectProperty(p, v) {
    it(`has .${p} to equal ${JSON.stringify(v)}`, () => {
      expect(this.subject[p]).toEqual(v);
    });
  }
}
