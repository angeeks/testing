# Testing

[![Build Status](https://travis-ci.org/angeeks/testing.svg?branch=master)](https://travis-ci.org/angeeks/testing)

Clean and Dry your Angular unit tests.

:construction: Comming Sooon ...

# Why this?

Angular built with great testing tools for unit tests, but its flexibility introduces a lot of redundant code when project's components/services grow. @angeeks/testing aims to provide cleaner ways to write specs for most of common patterns with minimum efforts.
And then, we can get more time for another cup of tea :tea:, cheers.

## spec from official guide

```
descirbe('handtypeed, emotional, typo prone spec title..', () => {

  TestBed.configu ...
});
```

## With @angeeks/testing

```
Suite.on(Target, (spec) => {
  spec.setup();
  spec.expectCreated();
  spec.yourExpectations();
});
```

# Usage

## Installation

```
```

## Usage

```
```
