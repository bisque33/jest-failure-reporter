# jest-failure-reporter

[![npm version](https://badge.fury.io/js/jest-failure-reporter.svg)](https://badge.fury.io/js/jest-failure-reporter)

Custom [reporter](https://jestjs.io/docs/en/configuration#reporters-arraymodulename--modulename-options) for [jest](https://jestjs.io/)

Show failed tests and retry commands, like Rspec.

## Installation

```shell
yarn add --dev jest-failure-reporter
```

## Usage

Add to jest config or package.json. I recommend using it with the default reporter.

```json
// package.json
{
  "jest": {
    "reporter": ["default", "jest-failure-reporter"]
  }
}
```

## Options

- `retryCommand`: If specified, you can change the command prefix. The default is `yarn test`.

```json
// package.json
{
  "jest": {
    "reporter": [
      "default",
      [
        "jest-failure-reporter",
        {
          "retryCommand": "jest"
        }
      ]
    ]
  }
}
```

## Example

```shell
$ cd example
$ yarn
$ npx jest test.js
 FAIL  ./test.js
  success
    ✓ two plus two is four (2ms)
  failure
    ✕ two plus two is five (2ms)
    ✕ two plus two is six (1ms)

  ● failure › two plus two is five

    expect(received).toBe(expected) // Object.is equality

    Expected: 5
    Received: 4

       7 | describe('failure', () => {
       8 |   it('two plus two is five', () => {
    >  9 |     expect(2 + 2).toBe(5)
         |                   ^
      10 |   })
      11 |   it('two plus two is six', () => {
      12 |     expect(2 + 2).toBe(6)

      at Object.it (test.js:9:19)

  ● failure › two plus two is six

    expect(received).toBe(expected) // Object.is equality

    Expected: 6
    Received: 4

      10 |   })
      11 |   it('two plus two is six', () => {
    > 12 |     expect(2 + 2).toBe(6)
         |                   ^
      13 |   })
      14 | })
      15 |

      at Object.it (test.js:12:19)

Test Suites: 1 failed, 1 total
Tests:       2 failed, 1 passed, 3 total
Snapshots:   0 total
Time:        1.135s
Ran all test suites matching /test.js/i.
./test.js
npx jest ./test.js -t "failure two plus two is five"
npx jest ./test.js -t "failure two plus two is six"
```

Additional output by jest-failure-reporter is the last three lines.

```text
./test.js
npx jest ./test.js -t "failure two plus two is five"
npx jest ./test.js -t "failure two plus two is six"
```
