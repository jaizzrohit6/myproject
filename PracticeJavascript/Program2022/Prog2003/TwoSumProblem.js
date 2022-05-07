//two sum problem
//brute force problem
//============================Brute Force  time complexy ==== O(N2)
let  bruteForceTwoSum = (array,sum)=>{
    let num=[]
    let previosNums=[]
    for(let x in array){
        for(let y in array){
            if(array[x] + array[y]===sum){
                if(num.length){
                    if(!previosNums.includes(array[x]) && !previosNums.includes(array[y])){
                        previosNums.push(array[x])
                        num.push(array[x],array[y])
                    }
                }
                else{
                    num.push(array[x],array[y])
                    previosNums.push(array[x])
                    
                }
            }
        }
    }
    return num
}

let array = [3,5,-4,8,11,1,-1,6]
let sum = 7
console.log(bruteForceTwoSum(array,sum))

//==============================================================================================

let binarySearch=(array,target,start=0,end=array.length)=>{
    let midpoint = (start + (end - start)/2)
    switch(true){
        case array[start] === target : return array[start]
        case array[midpoint] === target : return array[midpoint]
        case array[end] === target : return array[end]
        case end-start===0 : return false
        case array[midpoint] > target : return binarySearch(array,target,start+1,midpoint-1)
        case array[midpoint] < target : return binarySearch(array,target,midpoint+1,end-1)
    } 
    return false
}
let binarySearchTwoSum = (array ,sum)=>{
    let sortedArray = array.sort(function(a, b){return a-b})
    console.log("sortedArray=====",sortedArray)
    let nums=[]
    let previosNum=[]
    for(let i in sortedArray){
        console.log("addedsorted======",sum-sortedArray[i])
        let addend = binarySearch(sortedArray,sum-sortedArray[i])
        console.log("addend=====",addend) 
        if(addend && !previosNum.includes(array[i]) && !previosNum.includes(addend)){
            nums.push(sortedArray[i],addend)
            previosNum.push(addend)
        }
    }
    return nums
}
