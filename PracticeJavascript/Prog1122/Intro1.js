function linearSearch(arr,n,x){
    for(let i =0 ; i<= n ; i++){
        if(arr[i]==x){
            return i
        }
    }
    return -1
}

//driver code 

let arr = [2, 7 ,5,66,43,3]
let x = 66
let n = arr.length
let result = linearSearch(arr,n,x)
console.log(result) 
if(result ==-1){
    console.log("search value not present in array")
}
else{
    console.log("seach value present at index" ,result)
}