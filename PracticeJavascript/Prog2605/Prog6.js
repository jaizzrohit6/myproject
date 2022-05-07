// function insertionSort(arr,n){
//     let i,j,key

//     for(i=1;i<=n;i++){
//         key = arr[i]
//         j=i-1

//         while(j>=0 && arr[j]>key){
//             arr[j+1]=arr[j]
//             j=j-1
//             console.log("j====",j)
//         }
//         arr[j+1]=key
//     }
// }
// function printArray(arr, n,array) 
// { 
//     let i; 
//     for (i = 0; i < n; i++) 
//     array.push(arr[i])
//         console.log(array); 
  
// } 

// let arr=[5,2,6,3,4,1]
// let n = arr.length
// let array=[]
// insertionSort(arr,n)
// printArray(arr,n)
// simple array
//const arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // console: ['0', '1', '2']

// array-like object
const obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // console: ['0', '1', '2']

// array-like object with random key ordering
const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(anObj)); // console: ['2', '7', '100']

// getFoo is a property which isn't enumerable
const myObj = Object.create({}, {
  getFoo: {
    value: function () { return this.foo; }
  }
});
myObj.foo = 1;
console.log(Object.keys(myObj)); // console: ['foo']


function printallSubArray(n){
    for(let i=0; i<n;i++){
        for(let j=i;j<n;j++){
            for(let k =i;k<=j;k++){
                console.log(arr[k])
            }
        }
    }
}

let arr=[1,2,3,4,5]
let n = arr.length
console.log(printallSubArray(n))

