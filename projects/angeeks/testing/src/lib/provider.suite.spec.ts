import { Injectable as NgInjectable } from '@angular/core';
import { ProviderSuite as Provider } from './provider.suite';

@NgInjectable()
class Subject { }

function fakeDescribe() { }
function fakeFdescribe() { }

describe('ProviderSuite', () => {
  beforeAll(() => {
    Provider.describe = fakeDescribe;
    Provider.fdescribe = fakeFdescribe;
  });
  describe('#suite<Subject>(Subject, fn)', () => {
    beforeEach(() => {
      spyOn(Provider, 'describe').and.callThrough();
      spyOn(Provider, 'fdescribe').and.callThrough();
      Provider.suite<Subject>(Subject, (spec) => {
        spec.init();
      });
    });
    it('should describe the subject', () => {
      expect(Provider.describe).toHaveBeenCalled();
    });
    it('should describe with title', () => {
      const firstArg = Provider.describe['calls'].argsFor(0)[0];
      expect(firstArg).toEqual('Subject');
    });
    it('should not fdescribe the subject', () => {
      expect(Provider.fdescribe).not.toHaveBeenCalled();
    });
  });
});
