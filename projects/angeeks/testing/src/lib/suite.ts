interface RunOptions<S> {
  suite: new<T>(subject) => any;
  subject: new() => S;
  title: string;
}

function run<S>(ctx, fn, { suite, subject, title }: RunOptions<S>) {
    ctx(title, () => {
      const spec = new suite<S>(subject);
      fn(spec);
    });
}

export class Suite<T> {
  static describe = describe;
  static fdescribe = fdescribe;
  subject: T;
  static xon<S>(subject, fn) {}
  static on<S>(subject, fn) {
    const suite = this;
    const title = this.title(subject);
    run<S>(this.describe, fn, { suite, subject, title });
  }
  static fon<S>(subject, fn) {
    const suite = this;
    const title = this.title(subject);
    run<S>(this.fdescribe, fn, { suite, subject, title });
  }
  protected static title(subject) {
    return subject.name;
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
  protected init() {}
}
