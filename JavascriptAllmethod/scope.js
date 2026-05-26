

//in var case

var num=354;  //because var is funtion scope and global scope variable so that you declare varible outside of any scop so then you can access this variable anywhere 
//in var case he go into window object
//in let case he go into script object
function add()
{
  console.log(num)
}
add()
console.log(num)
//var ke liye alag memory nhi banti vo purani global memory ya global object me ghus jata hai
//let bhi gblobal ho sakta hai let ke liye alag aur safe memory milti hai jise js engine me scrit scope ya block scope kahte hai





let a=54;
if(true)
{             // he is give error
  var a=45;
  console.log(a);

}

var a=54;
if(true)       //he is give not error
{
  let a=45;
  console.log(a);
}
