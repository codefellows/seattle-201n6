# Basic JS Instructions

## Statements
- a self-contained instruction
- ends with a semicolon
- examples: variable declaration, log statement, function call
- non-statements: `if`, `else if`, `else`, `for` or `while` loop, function declaration
  - these *contain* statements

## Comments
- very useful for you and anyone reading your code
- can be removed during deployment
- multi-line vs. single-line

```javascript
/* this is a multi-line comment
it is hard to uncomment
one part of it */

// this is a bunch of single-line comments
// it is easy to uncomment
// any part of it
```

## Variables
- declaration: `var name;`
- assignment: `name = 'Dan';`
- both: `var otherName = 'Scott';`
- naming:
  - use camelCase
  - must begin with letter, $, or _
  - can't start with a number
  - can't contain dash or period
  - can't use keywords
- changing the value

## Primitive Data Types
1. Boolean
  - `true` or `false` value
2. String
  - '' or "" (empty string => falsey)
  - escape characters
  - 'Hello World!'
  - 'Hey ' + 'you' => 'Hey you'
3. Number
  - integers: whole numbers
    - 1
    - 10000000
    - -2
  - floating point numbers (floats): decimal numbers
    - 1.0
    - 2.65
    - -0.00001
  - truthiness of numbers
  - x === 0 => falsey
  - x !== 0 => truthy
4. Null
  - `null` => Falsey
5. Undefined
  - `undefined` => Falsey

## Expressions
- assign a value to a variable
- combine values into a single value: `3 * 2 + 7` evaluates to 13

## Operators
- Assignment: `=`
  `=` doesn't mean `equals` in JS
- Arithmetic: `+`, `-`, `*`, `/`, `++`, `--`, `%`
- String: `+`

### Logical
1. Or operator: `||`
  - check if a or b is true: `a || b`
  - true if *either* a or b is true
  - if a is true, doesn't even check b

``` javascript
// This is a nested If conditional, which does the same thing as the second example below
if (userOne === 'Scott') {
  if (userTwo === 'Dan') {
    console.log('Correct');
  } else {
    console.log('inside else');
  }
} else {
  console.log('outer else');
}

// This is a shorter way to do the above, but using the Or operator
if (userOne === 'Scott' || userOne === 'Dan') {
  // This console.log will execute as long as one of the two conditions evaluates to 'True'
  console.log('Correct');
}
```

2. And operator: `&&`
  - check if a and b are *both* true: `a && b`
  - true only if both are true

``` javascript
if (userOne === 'Scott' && userTwo === 'Mary') {
  // This console.log will execute only when both conditions evaluate to 'True'
  console.log('Correct');
}
```
