import { Component as NgComponent } from '@angular/core';
import { ComponentSuite as Component } from './component.suite';

@NgComponent({
  selector: 'subject-element'
})
class Subject { }

function fakeDescribe() { }
function fakeFdescribe() { }

describe('ComponentSuite', () => {
  beforeAll(() => {
    Component.describe = fakeDescribe;
    Component.fdescribe = fakeFdescribe;
  });
  describe('#suite<Subject>(Subject, fn)', () => {
    beforeEach(() => {
      spyOn(Component, 'describe').and.callThrough();
      spyOn(Component, 'fdescribe').and.callThrough();
      Component.suite<Subject>(Subject, (spec) => {
        spec.init();
      });
    });
    it('should describe the subject', () => {
      expect(Component.describe).toHaveBeenCalled();
    });
    it('should describe with title', () => {
      const firstArg = Component.describe['calls'].argsFor(0)[0];
      expect(firstArg).toEqual('Subject');
    });
    it('should not fdescribe the subject', () => {
      expect(Component.fdescribe).not.toHaveBeenCalled();
    });
  });
});
