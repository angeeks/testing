# Testing

[![Build Status](https://travis-ci.org/angeeks/testing.svg?branch=master)](https://travis-ci.org/angeeks/testing)
[![npm version](https://badge.fury.io/js/%40angeeks%2Ftesting.svg)](https://www.npmjs.com/package/@angeeks/testing)

Clean and Dry your Angular unit tests.

# Why this?

Angular built with great testing tools for unit tests, but its flexibility introduces a lot of redundant code when project's components/services grow. @angeeks/testing aims to provide cleaner ways to write specs for most of common patterns with minimum efforts.
And then, we can get more time for another cup of tea :tea:, cheers.

## spec from official guide

```
import { TestBed, async } from '@angular/core/testing';
import { TediousComponent } from './tedious.component';

descirbe('handtypeed, emotional, typo prone spec title..', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TediousComponent
      ],
    }).compileComponents();
  }));
  // frequent used test pattern
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  // frequent used test pattern
  it(`should have as title 'ngk'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('ngk');
  }));
});
```

## With @angeeks/testing

```
import { Suite } from '@angeeks/testing';
import { TediousComponent as Subject } from './tedious.component';

Suite.on<Subject>(Subject, (spec) => {
  spec.init();
  spec.expectCreated();
  spec.expectProperty('title', 'ngk');
});
```

And the report will be like:

```
  ngk-root
    ✓ should be created (68ms)
    ✓ has .title to equal "ngk" (44ms)
```

# Installation

```
  npm i -D @angeeks/testing
```

# APIs

## Suite.on<Subject>(Subject, callback: (spec) => {})

- Subject for the spec
- callback for jasmine describe, with spec instance keep common variables

## Suite.fon

Same like fdescribe
