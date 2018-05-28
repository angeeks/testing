import { Suite } from './suite';

class Tester {
}

function fakeDescribe () { }
function fakeFdescribe () { }

describe('Suite', () => {
  beforeAll(() => {
    Suite.describe = fakeDescribe;
    Suite.fdescribe = fakeFdescribe;
  });
  describe('#on<T>(Subject, fn)', () => {
    beforeEach(() => {
      spyOn(Suite, 'describe').and.callThrough();
      spyOn(Suite, 'fdescribe').and.callThrough();
    });
    describe('when subject is a string', () => {
      beforeEach(() => {
        Suite.on<Tester>('Customizable', (spec) => {
          spec.init();
        });
      });
      it('will describe the subject', () => {
        expect(Suite.describe).toHaveBeenCalled();
      });
      it('will not fdescribe the subject', () => {
        expect(Suite.fdescribe).not.toHaveBeenCalled();
      });
    });
    describe('when subject is a type', () => {
      beforeEach(() => {
        Suite.on<Tester>(Tester, (spec) => {
          spec.init();
        });
      });
      it('will describe the subject', () => {
        expect(Suite.describe).toHaveBeenCalled();
      });
      it('will not fdescribe the subject', () => {
        expect(Suite.fdescribe).not.toHaveBeenCalled();
      });
    });
  });
});
