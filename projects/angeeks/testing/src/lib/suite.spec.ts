import { Suite } from './suite';

class Tester { }

function fakeDescribe() { }
function fakeFdescribe() { }

describe('Suite', () => {
  beforeAll(() => {
    Suite.describe = fakeDescribe;
    Suite.fdescribe = fakeFdescribe;
  });
  describe('#on<T>(Subject, fn)', () => {
    beforeEach(() => {
      spyOn(Suite, 'describe').and.callThrough();
      spyOn(Suite, 'fdescribe').and.callThrough();
      Suite.on<Tester>(Tester, (spec) => {
        spec.init();
      });
    });
    it('will describe the subject', () => {
      expect(Suite.describe).toHaveBeenCalled();
    });
    it('should describe with title', () => {
      const firstArg = Suite.describe['calls'].argsFor(0)[0];
      expect(firstArg).toEqual('Tester');
    });
    it('will not fdescribe the subject', () => {
      expect(Suite.fdescribe).not.toHaveBeenCalled();
    });
  });
  describe('#xon<T>(Subject, fn)', () => {
    beforeEach(() => {
      spyOn(Suite, 'describe').and.callThrough();
      spyOn(Suite, 'fdescribe').and.callThrough();
      Suite.xon<Tester>(Tester, (spec) => {
        spec.init();
      });
    });
    it('will not describe the subject', () => {
      expect(Suite.describe).not.toHaveBeenCalled();
    });
    it('will not fdescribe the subject', () => {
      expect(Suite.fdescribe).not.toHaveBeenCalled();
    });
  });
});
