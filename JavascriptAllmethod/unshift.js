// The unshift() method in JavaScript is used to add one or more elements to the beginning of an array. It is a "mutating" method, meaning it modifies the original array directly rather than creating a new one. 

// MDN Web Docs
//  +3
// Key Features
// Inserts at the Start: Elements are added to index 0, and all existing elements are shifted to higher indices.
// Returns New Length: The method returns the total number of elements in the array after the addition.
// Handles Multiple Elements: You can add multiple items at once by passing them as separate arguments.
// Performance: It has a time complexity of 



//  because every existing element must be re-indexed to make room at the





const data=["ajay","vikas","kartik","uday"];
const output=data.unshift("nimacl")
console.log(output)
console.log(data)