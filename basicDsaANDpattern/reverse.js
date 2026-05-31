


// Reverse -> we can reverse array from many way

// direct method use

//1)  Reverse()
const array=[34,64,2,65,23,75];
const arrReverse=array.reverse()//O(n) liner time  complecty  n/2  and O(1) space compexity,because not extra space and change original array
console.log(arrReverse)



const array2=[23,5,34,76,34,76];
const arr2Reverse=array2.toReversed();  // O(n) time comlexity and O(n) space complexty because he change not change original array
console.log(arr2Reverse)



//  by using for loop
const array3=[65,34,76,34,76,4];
const n=array3.length;
for (let i=n-1;i>=0;i--)  // O(n) time complexity  O(1) space compexity,because this loop run exatly n time   this loop print value reverse forment but not store reverse
 {           
  console.log(array3[i])
}


//  real reverse by using for loop

function reverse()
{
const array4=[45,7,23,75,4,67];
const num=array4.length   // time complexity O(1) and space complextity (0)1,beuause he does not take extra space in memory
for(let i=0;i<num/2;i++)  
{
  let temp=array4[i];
  array4[i]=array4[num-i-1]
  array4[num-i-1]=temp
}
return array4
}
const result=reverse()
console.log(result)



// reverse with while loop

const array5=[45,65,23,65,34,75];
let start=0,end=array5.length-1;
while(start<end)
{
  let temp=array5[start]
  array5[start]=array5[end] //O(n) time complexity and O(1) space complexity
  array5[end]=temp;
  start++;
  end--;
}
console.log(array5)