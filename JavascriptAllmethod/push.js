

// In JavaScript, the push() method is used to add one or more elements to the end of an array. It is a "mutating" method, meaning it directly modifies the original array rather than creating a new one. 

// MDN Web Docs
//  +2
// Key Features
// Modifies Original Array: Changes the length and content of the array it is called on.
// Returns New Length: Instead of returning the updated array, it returns the new length of the array after the addition.
// Multiple Elements: You can add several items at once by passing them as separate arguments.



const aa=[22,53,23,5];
const bba=aa.length
console.log(bba)
const bb=aa.push(64,45)
console.log(bb);
console.log(aa);

