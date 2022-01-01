function maxSumSubarray(arr,maxSofar){
   // var maxSofar=Number.NEGATIVE_INFINITY
    var len= arr.length
    var leftIndex=0
    var rightIndex=arr.length-1

    for(let i = 0 ; i < len;i++){
        for(let j=i;j<=len;j++){
            let maxSum=0
            for(let k = i ; k<j;k++){
                maxSum=maxSum+arr[k]
                if(maxSofar<=maxSum){
                    maxSofar=maxSum
                    leftIndex=i
                    rightIndex=j
                }
            }
        }
    }
    return {
        left:leftIndex,
        right:rightIndex,
        finalMaxSum:maxSofar
    }
}
let input = [2, 1, 5, 2, 3, 2]
let maxVal=13
console.log(maxSumSubarray(input,maxVal))
