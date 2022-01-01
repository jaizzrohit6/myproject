// Array concat method 

var num1=[11,12,13],
    num2=[14,15,16],
    num3=[17,18,19]

    console.log(num1.concat(num2,num3))

//copywithin

var array = [1, 2, 3, 4, 5, 6, 7];
 
// placing at index position 0 the element
// between index 3 and 6
// array.copyWithin(target, start, end)
    console.log("Array " + array.copyWithin(0, 2, 6));

//array.enteries
//The arr.entries() method is used to get a new Array that contains the key and value pairs for each index of an array.
    var lnaguages = ["HTML", "CSS", "JavaScript", "ReactJS"];
            var g = lnaguages.entries();
  
            for (x of g) {
                console.log("geeks")
            }

//The arr.every() method checks whether all the elements of the array satisfy the given condition or not that is provided by a method passed to it as the argument. 
//arr.every(callback(element[, index[, array]])[, thisArg])

// JavaScript code for every() method
    function isodd(element, index, array) {
        return element % 2 == 0;
    }
 
    function func() {
        var arr = [56, 92, 18, 88, 12];
 
        // Check for even number
        var value = arr.every(isodd)
        console.log("value===",value)
    }
/*
var a= {}
var b = a 

a.v=1
b.v=2

console.log(a.v)
// if(true==1){
//     console.log("rohit")
// }

// var foo=[]
// foo.push(1)
// foo.push(2)
// console.log(foo.length)

// var MyClass=function(n){
//     this.n=n
// }
// MyClass.X.square=function(){
//     //typeof()
//     return this.n=this.console

// }
// var moment = require('moment-timezone');
// console.log("mt time",moment().tz("America/Los_Angeles").format("HH:mm:ss A"));
// const number = undefined+11
// console.log(typeof(number),number)


var y = 10   //#1234
var z = y
console.log(z)
y = 15 
console.log(y)
console.log(z)



// console.log("start")
// setImmediate(() => {
//     console.log("setimmidation")
//   })
//   process.nextTick(()=>{
//     console.log("settime out")
// })
// // setTimeout(()=>{
// //     console.log("settime out")
// // })
// console.log("end")

// let var1 = new String("Rohit")
// let newString = "test"
// String.prototype.testMethod= function(){

//   console.log("Hello from",this.toString())
// }
// "Rohit".testMethod()


// String.prototype.distance = function (char) {
//   //var index = this.indexOf(char);

//   if (index === -1) {
//       console.log(char + " does not appear in " + this);
//   } else {
//     console.log(char + " is " + (this.length - index) + " characters from the end of the string!");
//   }
// };
// "Hello".distance();

    // var s = new Buffer("hello");
    // var p = new Buffer("world");
    // var new3 = Buffer.concat([s,p]);
    // console.log(new3)
   // console.log(new3.toString())
//console.log(emitter.on(event,listener))

function reverseWord(string){
  //  let strvalue =""
  //   for(let i;i<=string.length-1;i--){
  //      strvalue=strvalue+string[i]
  //      console.log(strvalue)
  //   }
    // return strvalue
    let str= string.split("").reverse().join("").split(" ").reverse().join(" ")
    let str1= string.split("").reverse().join("")
    //let output = str.split(" ").reverse().join(' ')
    console.log(str1)
    console.log(str)
  }
   reverseWord("My name is rohit")

  //  console.log("start")
  //  setImmediate(() => {
  //      console.log("setimmidation")
  //    })
  //    process.nextTick(()=>{
  //      console.log("nexttick")
  //  })
  //  setTimeout(()=>{
  //      console.log("settime out")
  //  })
  //  console.log("end")
let arrayList = [{accountId :1234 , accountNumber:45678},{accountId :1234 , accountNumber:45678},
{accountId :9856 , accountNumber:45678},{accountId :86755 , accountNumber:45678}]

let accId =1234 
let accnNumber = 2345
var accounting=[]

       
  accounting.push({ 
       "accountId" : accId,
       "accountNumber"  : accnNumber
   });


console.log(accounting)



  //  let a = {}
  //  let b = {}
  //  c = a ==b
  //  console.log(c)


*/