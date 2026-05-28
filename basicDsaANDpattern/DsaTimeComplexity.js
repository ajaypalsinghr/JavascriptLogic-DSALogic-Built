//Time Complexity

//1) 0(1) Constant time  // data is 1 ,10 or 100 computer will run only a step

const array=[64,34,65,23,76]; //constant time is many fast from all
console.log(array[3])
console.log(array[0])
console.log(array[2])


//2) 0(n) liner time

const array2=[54,43,65,343,7,534,76];
for(let i=1;i<array2.length;i++)  // he run from starting  and run till end means this inside array 7 element so he runs 7 time
{
  console.log(array2[i])
}


//3) 0(n2)  quadratic time(very slow)
const array3=[54,65,234,76,34,5];  //it aply in nexted loop
let n=array3.length;
for(let i=0;i<n;i++)
{
  for(let j=i+1;j<n;j++)
  {
    if(array3[i]===array3[j])
    {
      return true
    }
  }
  return false
}


//4)
//O(log n) Logarithmic Time    //this stating always between of array //and this some fast from O(n)
                             //binary searching
  //data half in every step
  let num=16;
  while(num>1)
  {
    console.log(num);
    num=Math.floor(num/2)
  }


