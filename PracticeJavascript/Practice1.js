//interview question 1

console.log("start")
setImmediate(() => {
    console.log("setimmidation")
  })
  process.nextTick(()=>{
    console.log("nexttick")
})
setTimeout(()=>{
    console.log("settime out")
})
console.log("end")