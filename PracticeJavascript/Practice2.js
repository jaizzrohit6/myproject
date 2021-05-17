// function maxProduct(arr,n){
//     arr.sort(function(a, b){return a - b})
//     let num1, num2;
//     let sum1 = arr[0] * arr[1]
//     let sum2 = arr[n-1]* arr[n-2]

//     if(sum1>sum2){
//         num1=arr[0]
//         num2=arr[1]
        
//     }
//     else{
//         num1=arr[n-1]
//         num2=arr[n-2]
//     }

//     console.log("Max product pair = " +
//     "{" + num1 + "," + num2 + "} "+ num1*num2 +"");

// }
// //driver code
// let  arr = [2,5,7,9,3]
// let n =arr.length
// maxProduct(arr,n)

//=======================================================================================================

// function countSubStr(str,n)
//     {
//         let m = 0; // Count of 1's in input string
  
//         // Traverse input string and count of 1's in it
//         for (let i = 0; i < n; i++)
//         {
//             if (str[i] == '1')
//                 m++;
//         }
  
//         // Return count of possible pairs among m 1's
//         return m * Math.floor((m - 1) / 2);
//     }
     
//     // Driver program to test the above function
//     let str = "00100101";
//     let n = str.length;
//     console.log(countSubStr(str, n));

//=====================================================================================================
// console.log(typeof typeof 1)
// console.log(false && 10 && []); // false
// console.log(" " && true && 10); // 10
// console.log(null || 10 || undefined); //prints 10

// let myfunc=function printChannelName(name) {
//   var n = name || "Tech Talks With AK";
//   console.log(n);
// }

//console.log(typeof myfunc); //prints "Tech Talks With AK"

// A function is defined and then invoked
// (function_name () {
//     return ()
// }) ();

// var str=` this is multiline
//             string`
// var y=10

//  let rohit =function xyz(){
//  }
//  var y=10
// function myfun(){
    
// }
// console.log(typeof rohit)
// console.log(typeof y)

// console.log(typeof rohit !=="undefined")
// console.log(typeof y !=="undefined")

// console.log(y+=typeof myfun)

//Problem 1 

// function f(a, b, c) {
// 	m = ["1", "2", "3"];
// 	a = 3;
// 	b[0] = "X";
// 	c.first = false;
// }

// var x = 4;
// var y = ["A", "B", "C"];
// var z = { first: true };

// f(x, y, z);
// console.log("function f==",x, y, z); //4 XBC false

// function g(a) {
// 	a = { first: true };
// 	console.log(a);  //true
// }
// console.log("value of z ==",z)
// g(z);
// console.log(z); // true



//Problem 2 


// function foo1() {
//     return {
//         bar: "hello"
//     };
// }
    
// function foo2() {
//     return
//     {
//         bar: "hello"
//     };
// }
    
//     console.log(foo1());
//     console.log(foo2());

//Problem 3

// (function() {
//     console.log(1);
//     setTimeout(function(){console.log(2)}, 1000);
//     setTimeout(function(){console.log(3)}, 0);
//     console.log(4);
//  })();
      
//Problem 4

// for (var i = 0; i < 5; i++) {
//     ((x)=> {
//        setTimeout(function() {
//           console.log("setimeout loop",x);
//        },  1000 );
//     })(i);
//     console.log("loop  without setime",i)
//  }

//problem 5

//  x= 5;
// function check(){
//    y = 10;
//    console.log(x);
//    //var x =10;
// }
  
// function check2(){
//    console.log(y);
//    var y =6
// }
  
// check(); // x=5
// check2();//y=10


/*
      var x has been defined and initialized inside check() after it is logged. Hoisting works only for variable declaration and not for initialization, so it returns undefined.
      In check(), y has been initialized to 10. Since var is not used, the variable has its scope until it encounters a variable by the given name or the global object. 
      So when check2() is called, it logs 10 as the output.
*/
