
const data=[10,100,243,1000];
const out=data.map((item,index,array)=>{

  const discount=item*10/100;
  const finalPrice=item-discount
  return { 

...item,finalPrice:finalPrice,discount:discount
  }
})
console.log(out)