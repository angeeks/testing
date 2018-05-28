import { Suite } from '@angeeks/testing';
import { AppComponent as Sub } from './app.component';

Suite.on<Sub>(Sub, (spec) => {
  spec.init();
  spec.expectCreated();
  spec.expectProperty('title', 'ngk');
});
