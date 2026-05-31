

//find minimum number from array
const array=[4565,23,6523,65]
let min=array[0]
for(let i=1;i<array.length;i++)  //O(n) time complexity  and O(1) space complexity
{
if(min>array[i])
{
  min=array[i]
  console.log(min)
}
}