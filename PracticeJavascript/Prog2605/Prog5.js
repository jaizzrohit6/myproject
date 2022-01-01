// function smallestSubarray(K,S,arr,N){
//     //store the first index of the current subarray
//     let start =0
//     // store the last index of the current subaaray
//     let end =0;
//     //store the sum of the current subaarray
//     let currSum=arr[0]

//     //store the length of smallest subaaray
//     let res=Number.MAX_SAFE_INTEGER
//     console.log("safe integer",res)
//     let counter=0
//     while(end < N-1){
//         counter++
//     //if sum  of the current array <=S or  length of the current subarray <=K 
//         if(currSum <= S || (end - start + 1)<=K){
//             //increase the subarray sum and  size
//             //console.log("curr",arr[++end])
//             currSum = currSum + arr[++end]
//             console.log("while 1 if ==",currSum)
//         }
//             // Otherwise
//         else {
//             // Update to store the minimum size of subarray obtained
//             res = Math.min(res, end - start + 1);
//             // Decrement current subarray size by removing first element
//             currSum -= arr[start++];
//             console.log("while 1 else",currSum)
//         }
//         console.log("counter ====",counter)
//     }
//     // Check if it is possible to reduce the length of the current window
//     while (start < N)
//     {
//         if (currSum > S && (end - start + 1) > K){
//             res = Math.min(res, (end - start + 1));
//         }
//         currSum -= arr[start++];
//         console.log("while 2 if ",currSum)
        
//     }
//     console.log("res value =",res)
//     return res;
// }

// // Driver Code
// let arr = [ 1, 2, 3, 4, 5 ];
// let K = 1, S = 8;
// let N = arr.length;
// console.log(smallestSubarray(K, S, arr, N));


const countDuplChar=function(str){
	var arr={};
	for(let i =0 ; i<str.length ; i++){
		if(Object.keys(arr).includes(str[i])){
			arr[str[i]] = arr[str[i]]+1
            continue
		}
		arr[str[i]] = 1
	}
    return arr
}

let input = "aabbxyzlaalyzxbm"
console.log(countDuplChar(input))