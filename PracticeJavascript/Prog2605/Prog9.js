// // //quick sort algorith
// // // swapping value 
// // var items = [9,6,2,8,4,7]
// // function swap(items,lIndex,rIndex){
// //     let temp;
// //     temp = items[lIndex]
// //     items[lIndex] = items[rIndex]
// //     items[rIndex]=temp

// // }

// // function partition(items,left,right){
// //     let pivot = items[Math.floor((left+right)/2)] // take mid value as a pivot
// //     console.log("Pivot",pivot)
// //     let i =left //left pointer
// //     let j = right //right pointer
// //     while(i<=j){
// //         console.log("inside this",i,j,pivot)
// //         while(items[i]<pivot){
// //             i++
// //         }
// //         while(items[j] > pivot){
// //             j--
// //         }
// //         if(i<=j){
// //             swap(items,i,j)
// //             i++
// //             j--
// //         }
// //     }
// //     console.log("value of i",i)
// //     return i
// // }

// // function quickSortAlgo(items,left,right){
// //     console.log("left+++Rihght",left,right)
// //     var index;
// //     if(items.length>1){
// //         index = partition(items,left,right) //return index
// //         console.log("index",index)
// //         if(left <  index-1){
// //             quickSortAlgo(items,left,index-1) //more elements on left
// //         }
// //         if(index  < right){
// //             quickSortAlgo(items,index,right)  //more elments on right
// //         }
// //     }
// //     return items
// // }

// // //first call to quicksort

// // var sortedArray = quickSortAlgo(items, 0, items.length - 1);
// // console.log(sortedArray); //prints [2,3,5,6,7,9]


// var totalSum=0
// function simpleArraySum(ar) {
//     // Write your code here
//     let n = ar.length;
   
//     for(let i=0;i<n;i++){
//         totalSum = totalSum + ar[i]
//         console.log(totalSum)
//     }
//     console.log(totalSum)
//     return totalSum;

// }
// let array =[1,2,3,4]
// console.log(simpleArraySum(array))


// while(true==1){
// }


// var a= {}
// var b = a 

// a.v=1
// b.v=2

// console.log(a.v)
//===============================================================================================

// function lengthOfLongestSubstring(string) {
//     var max = 0, current_string = "", i, char, pos;

//     for (i = 0; i < string.length; i += 1) {
//         char = string.charAt(i);
//         pos = current_string.indexOf(char);
//         if (pos !== -1) {
//             // cut "dv" to "v" when you see another "d"
//             current_string = current_string.substr(pos + 1);
//         }
//         current_string += char;
//         max = Math.max(max, current_string.length);
        
//     }
//     console.log(current_string)
//     return max;
// }


// function lengthOfLongestSubstring(check) {
//     var letters = check.split("");
//     var max = 0;
//     var result = new Map();
//     var start = 0;
    
//     for (var i = 0; i < letters.length; i++) {
//       if (!result.has(letters[i])) {
//         result.set(letters[i], i);
//       } else {
//         i = result.get(letters[i]);
//         result.clear();
//       }
      
//       if (max < result.size) {
//         max = result.size;
//       }
//     }
//     return max;
//   }
// let uniquesubtr =lengthOfLongestSubstring("dvdf"); // 3
// console.log(uniquesubtr)