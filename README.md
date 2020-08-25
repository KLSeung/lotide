# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @klseung/lotide`

**Require it:**

`const _ = require('@klseung/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(actual, expected))`: Displays message to check if the input values are equal to one another
* `assertArrayEqual(actual, expected)`: Displays message to check if the input arrays are equal to one another
* `assertObjectsEqual(actual, expected)`: Displays message to check if the input objects are equal to one another
* `countLetters(sentence)`: Separates the unique alphabets in a sentence given and counts each case of the alphabets and returns an object containing the individual alphabet counts.
* `countOnly(allItems, itemsToCount)`: Counts the occurences of the items listed in itemsToCount object which have the values as true inside the allItems array. 
* `eqArray(array1, array2)`: Returns true or false depending on if array1 and array 2 are equal or not.
* `eqObjects(object1, object2)`: Returns true or false depending on if object1 and object2 are equal or not.
* `findKey(object, callback)`: Returns the keys that returns true for the callback function.
* `findKeyByValue(object, value)`: Returns the keys in an object given a value to search for within the keys.
* `flatten(arr)`: Returns a single array that is flattened when given arrays with an infinite amount of nested arrays
* `head(array)`: Returns the first element of an array
* `letterPositions(sentence)`: Returns an object containing the index of where each unique alphabet is placed in. An alphabet key could contain an array if that alphabet is placed in multiple different positions.
* `map(arr, callback)`: Applies a callback function to each element in the array.
* `middle(arr)`: Returns the middle element of an array. Returns 1 element if the array has an odd amount of elements and returns 2 elements if the array has an even amount of elements. Also returns no element if the array doesn't exceed 2 elements.
* `tail(arr)`: Returns all the elements of the array after the first element.
* `takeUntil(arr, callback)`: Returns a new array which slices off the given array at the location where the callback function condition is met.
* `without(source, itemsToRemove)`: Returns a new array which removes the itemsToRemove array from the source array.