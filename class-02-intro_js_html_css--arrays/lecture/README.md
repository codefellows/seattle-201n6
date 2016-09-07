# Primitive Data Types

1. Boolean
  - True or False value
2. String
  - '' or "" (empty string => falsey)
  - 'Hello World!'
  - 'Hey ' + 'you' => 'Hey you'
3. Integer
  - 1
  - 10000000
  - -2
  - 0 => falsey
  - x > 0 > x => truthy
4. Null
  - null => Falsey
5. Undefined
  - 'undefined' => Falsey

# Logical Operators

1. || (Or operator)

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

2. && (And operator)

``` javascript
if (userOne === 'Scott' && userTwo === 'Mary') {
  // This console.log will execute only when both conditions evaluate to 'True'
  console.log('Correct');
}
```
