


// print table by using for loop

let sum=0,table=7;
for(let i=1;i<=10;i++)   //o(1) constant time   beause the loop runs a fixed number of time (exect 10 itration)     // if we use i<=n so this time complexity will be O(n) because this is dynamic
{           // and space memory aloso 0(1)
sum=table*i;
console.log(sum)
}




//tablr by using funtion
function tableData(n)
{
let sum2=0,table2=8;
let tableResult=[]

for(let i=1;i<=n;i++)  //this time complexity O(n) and space complexity O(1)
{
  sum2=table2*i
 tableResult.push(sum2)
}
return tableResult
}
let n=10;
const result=tableData(n)
console.log(result)