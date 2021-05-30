//synchronous
console.log("synchronous1")
console.log("synchronous2")
console.log("synchronous3")

//Asynchronous

// setTimeout (function(){console.log("Asyncsynchronous4")},1000)
// console.log("Asyncsynchronous1")
// setTimeout (function(){console.log("Asyncsynchronous2")},3000)
// console.log("Asyncsynchronous3")

//callback example

let list=["man","woman","child"]

// create a new array
// loop over the array and map the data to new content

const newList=list.map(function(val){
    return val + "kind"
})
console.log("newList==",newList)
//==================================

const promise = new Promise(function(resolve, reject) {
    // promise description
  })
//===================================

let number =[4,6,8,17]

const newList1=number.map(Math.sqrt)
console.log("square of number===",newList1)


//array.forEach(function(currentValue, index, arr), thisValue)


var sum=0;
var num=[10,20,30,40]
num.forEach(myFunction)

function myFunction(item)
{
    sum+=item
}
console.log(sum)

var arr=arr[index]
var numbers = [65, 44, 12, 4];
numbers.forEach(myFunction1)

function myFunction1(item, index, arr) {
  arr[index] = item * 10;
}

console.log(arr[index])


