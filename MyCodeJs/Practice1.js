//interview question 1

console.log("start")
setImmediate(() => {
    console.log("setimmidation")
  })
  setInterval(() => {
    console.log("setinterval")
  },1);
  process.nextTick(()=>{
    console.log("nexttick")
})
setTimeout(()=>{
    console.log("settime out")
})
console.log("end")


//interview question 2

function reverseWord(string){
  //  let strvalue =""
  //   for(let i;i<=string.length-1;i--){
  //      strvalue=strvalue+string[i]
  //      console.log(strvalue)
  //   }
    // return strvalue
    let str= string.split("").reverse().join("").split(" ").reverse().join(" ")
    //let output = str.split(" ").reverse().join(' ')
    console.log(str)
  }
   reverseWord("My name is rohit")