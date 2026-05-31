

// forOF loop use of direct each element of array and access each value without using indexing
function demo(array)
{
const arr=[]
for(let item of array)
{
  arr.push(item)
}
return arr
}
const array=[34,54,23,6,34,65];
const result=demo(array)
console.log(result)


//forIn loop
const array2=[45,76,34,76,45,76];  //forin loop use in array and string ,which is use to access each element by using indexing of element
for(const key in array2)
{
console.log(array2[key])
}
