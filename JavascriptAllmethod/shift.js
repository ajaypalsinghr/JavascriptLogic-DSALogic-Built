
// In JavaScript, the shift() method removes the first element from an array and returns that specific element. 

// MDN Web Docs
//  +1
// Because it modifies the original array, it is considered a "mutating" method. 

// MDN Web Docs
//  +1
// Key Characteristics
// Returns: The element that was removed. If the array is empty, it returns undefined.
// Modifies Length: It reduces the length of the array by one.
// Re-indexing: Every remaining element is moved one position to the left (e.g., the element at index 1 moves to index 0).
// Performance: It has a Time Complexity of 



//  because it must re-index every remaining item in the array. 

// MDN Web Docs
//  +6



const data=[24,4,23,4,45];
const dataShift=data.shift();
console.log(dataShift)
console.log(data)