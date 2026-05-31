
function demo(a)
{
  return new Promise((resolve)=>{
setTimeout(()=>{
  resolve(101)
},5000)
  })
}
function dem2(userId)
{
  return new Promise((resolve)=>{
    setTimeout(()=>{
resolve("api call")
    })
  })

}
demo().then((id)=>{
console.log("data mil gya",id)
return dem2(id)
}).then((profile)=>{
  console.log("second daa mil ga",profile)
})
