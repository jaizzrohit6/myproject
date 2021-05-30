// { 'Alice': 2,
//   'Bob': 1, 
//   'Tiff': 1,
//   'Bruce': 1 }


// let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']
// let count =1
// let n=names.length
// function printVal(){
// for(var i =0;i<=n;i++){
//     for(var j=i+1 ; j<=n-1 ; j++){
//         if(names[i]==names[j]){
//            count++
//         }
//     } 
// }
// }


var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];
var obj = {};

var  myfun=function(allNames, name) {
    if (name in allNames) {
      allNames[name]= allNames[name]+1;
    } else {
      allNames[name] = 1;
    }
  return allNames;
  }
var countedNames = names.reduce(myfun, obj);

console.log(countedNames);
// }
// printVal()


// let obj = {counter :1}
// let obj1 = obj;
// console.log(obj1.counter++);
// console.log(obj.counter--);



// const fibWithMemo = n => {
//     let memo = {} // we will store("memoize") our values here
  
//     const fib = (n) => {
//         let value 
  
//         if (n in memo) {
//             // if the n is already in our memo object, we look it up and store it in value
//             value = memo[n]
//         } else {
//             // otherwise, we calculate it and store it in value
//             if (n === 1 || n === 2) {
//                 value = 1
//             } else {
//                 value = fib(n - 1) + fib(n - 2) 
//             }
//             // store the value for current n to our memo object
//             memo[n] = value
//         }
//         console.log(memo)
//         return value
//     }
//     return fib(n)
//   }




// function diffArray(arr1, arr2) {
//     var newArr = []; 
 
//     var ordArr = arr1.concat(arr2).sort();  //[1,1,2,2,3,3,4,5,5]
//     var n = ordArr.length 
//     for ( var i = 0;  i < n  ; i++ ) {
//         //for(var j=i+1;j<=n-1 ; j++){
//             if (ordArr[i]  !==  ordArr[i+1] ){
 
//                 newArr.push(ordArr[i]);
//                 }
//         //}
       
//     }
//     console.log(newArr);
//  }
//  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);