import { ComponentSuite as Component } from '@angeeks/testing';
import { AppComponent as Sub } from './app.component';

Component.suite<Sub>(Sub, (spec) => {
  spec.init();
  spec.expectProperty('title', 'ngk');
});
