// var arr=[7,8,1,4,2]
// //var start=0
// //var end=arr.length()
// console.log(arr.reverse())

// const myObject = {
//     myMethod(items) {
//       console.log(this); // logs myObject
//       const callback = () => {
//         console.log(this); // logs myObject
//       };
//       items.forEach(callback);
//     }
//   };
//   myObject.myMethod([1, 2, 3]);
  
  
  // console.log(null===undefined)
  // var z=10


//=======================================================================

// A simple Javascript program to find max product pair in
// an array of integers

// Function to find maximum product pair in arr[0..n-1]
// function maxProduct(arr, n,prod)
// {
// 	if (n < 2)
// 	{
// 		console.log("no pair exist")
// 		return;
// 	}

// 	// Initialize max product pair
// 	let a = arr[0], b = arr[1];

// 	// Traverse through every possible pair
// 	// and keep track of max product
// 	for (let i=0; i<n; i++){
//     for (let j=i+1; j<n; j++){
//       if (arr[i]*arr[j] > a*b)
//       a = arr[i], b = arr[j];
//     }
//   }
	
	

// 	console.log("Max product pair is {" + a + ", "
// 		+ b + "} and their product is  {" +(a*b)+" }");
// }





// Javascript code to Find a pair with maximum
// product in array of Integers
function maxProduct(arr, n)
{
	
	// Sort the array
	arr.sort(function(a, b){return a - b});
	
	let num1, num2;
	
	// Calculate product of two smallest numbers
	let sum1 = arr[0] * arr[1];
	
	// Calculate product of two largest numbers
	let sum2 = arr[n - 1] * arr[n - 2];
	
	// print the pairs whose product is greater
	if (sum1 > sum2)
	{
		num1 = arr[0];
		num2 = arr[1];
	}
	else
	{
		num1 = arr[n - 2];
		num2 = arr[n - 1];
	}
	console.log("Max product pair = " +
				"{" + num1 + "," + num2 + "}");
}

// Driver Code
let arr = [ 1, 4, 3, 6, 7, 0 ];
let n = arr.length;
maxProduct(arr, n);

// This code is contributed by avanitrachhadiya2155


//========================================================================

function reverseString(str){
  const arr = str.split("")
  arr.reverse()
  console.log(arr)
}

reverseString("greeting")



  