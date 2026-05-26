
//how to define varable in js
//in var case
var a=54; 
 a="ajay"           // var a and a alocate 2 diffrent memory address but get priory always latest value
console.log(a)       // and in memory have a garbag collectin which remove privious value from memory


//in let case
let b=45;
 //let  b="ajay";  //means  in let case we can reasign value but can not be redeclare value
 b="aajy"// will give not error  because we can reasign value
console.log(b)

 
//in const case
const c=34;
//c="ajay";  // means in const case we can not redeclaretion and not re asign value
console.log(c)



//var case
console.log(num1) //fully hoist found value so it go outside of temprary dead zone 
var num1=5;    //undefined
console.log(num1)

//let case
console.log(num2)
let num2;   // we can not access value before intialization ,and he goes in tempory deadzone


//const case
console.log(num3)
const num3=45;  // we can not access value before intialization ,he also goes on temprary dead zone











