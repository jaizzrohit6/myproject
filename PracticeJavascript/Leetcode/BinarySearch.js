// Binary search

// function binarySearch(arr,l,r,x){
// 	if(r>=l){
// 		let mid = l+Math.floor((r-l)/2)
		
// 		//if number is found on mid 
// 		if(arr[mid]== x){
// 			return mid;
// 		}
		
// 		if(arr[mid]>x){
// 			return binarySearch(arr,l,mid-1,x)
// 		}
// 		// Else the element can only be present
//         // in right subarray
//         return binarySearch(arr, mid + 1, r, x);
// 	}
// 	return -1
// }

// let arr = [ 2, 3, 4, 10, 40 ];
// let x = 12;
// let n = arr.length
// let result = binarySearch(arr, 0, n - 1, x);
// console.log(result)  
// if(result==-1){
//     console.log("Numer is not available in the array")
// }



// function findNDigit(n){
// 	if(n==1)
// 	return 1

// 	let s = n.toString()
// 	console.log(s)

// return(s.length + findNDigit(n-1))
// }

// let n =100
// console.log(findNDigit(n))



// var arr = [ 0, 1, '', undefined, false, 2, undefined, null, , 3 ];
 
// var filtered = arr.filter(Boolean);
// console.log(filtered);

// var arr = [ 0, 1, '', undefined, false, 2, undefined, null, , 3, NaN ];
 
// var filtered = arr.filter(e => e != null);
// console.log(filtered);

class PersonDetail{
	constructor(firstname,lastname,age){
		this.firstname=firstname;
		this.lastname=lastname;
		this.age=age
	}
	addAddress(address){
		this.address=address
	}
	
	getDetails(){
		console.log(`My name is ${this.firstname} ${this.lastname} of ${this.age} and ${this.address}`)
	}
}
let person1 = new PersonDetail('Rohit','Jaiswal',25)
person1.addAddress("Patna")
person1.getDetails()