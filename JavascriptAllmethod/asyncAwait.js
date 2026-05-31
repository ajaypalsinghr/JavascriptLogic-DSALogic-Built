

async function  data()
{

  console.log(await "api call");
  let id=await 34;
console.log(id)
}
data()




// with Arrow function

const data2=async()=>{
  let id=await 454;
  console.log(id)
  let name=await "ajay";
  console.log(name)
}
data2()