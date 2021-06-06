# Do Not Disturb

[![npm](https://img.shields.io/npm/dm/@theunderscorer/do-not-disturb)](https://www.npmjs.com/package/@theunderscorer/do-not-disturb)
[![npm](https://img.shields.io/npm/v/@theunderscorer/do-not-disturb)](https://www.npmjs.com/package/@theunderscorer/do-not-disturb)

A simple API for managing "Do Not Disturb" mode.

> Currently only MacOS is supported.

## Installation

```sh
  $ npm install @theunderscorer/do-not-disturb
```

## Why this exists

There are already plenty of packages for managing "Do Not Disturb" mode, however I was not able to get them to work on latest MacOS version (Big Sur) hence I've created this package :P.


## Usage

```js
const {
  enable,
  disable,
  toggle,
  isEnabled,
} = require('@theunderscorer/do-not-disturb');

// Enables "Do Not Disturb" mode
await enable();

// Disables "Do Not Disturb" mode
await disable();

// Toggles "Do Not Disturb" mode
await toggle();

// Returns "true" if "Do Not Disturb" mode is enabled
await isEnabled();
```

## Development

The package is written in typescript. In order to build it run:

```sh
  $ npm run build
```

To run tests (will run only on MacOS) run:
```sh
  $ npm run test
```

## Future plans

- [ ] Support Linux and Windows
- [ ] Test Suite for CI
