
// The slice() method in JavaScript is used to extract a portion of an array or a string and return it as a new object. Crucially, it is non-destructive, meaning it does not modify the original array or string. 

// MDN Web Docs
//  +3
// Key Features
// Returns a New Object: It creates a "shallow copy" of the selected elements.
// Non-Mutating: The original data remains completely untouched.
// Parameters: It takes two optional arguments: start and end.
// Start: The index where extraction begins (inclusive). Defaults to 0.
// End: The index before which extraction ends (exclusive). Defaults to the end of the sequence. 

// MDN Web Docs
//  +8


// Array vs. String: The method works almost identically for both Array.slice() and String.slice().
// slice vs. splice: While slice only reads data, splice actually changes the original array by adding or removing elements.
// Shallow Copy: For arrays containing objects, slice copies the references to those objects. If you modify an object inside the new array, it will also be changed in the original. 





const data=[24,53,23,64,63,76];

const output=data.slice(4,6);
console.log(output)