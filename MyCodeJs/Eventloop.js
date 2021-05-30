// let a = true
// let c=0;
// setTimeout(()=>{
//     a=false
// },2000)

// // while(a){
// //     console.log(c++)
// // }

// setInterval(() => {
//     if(a){
//         console.log(c++)
//     }
// }, 200);


// how to check whether url is correct or not 

function absolute_url() {
    //let urls = "https://www.geeksforgeeks.org/"
    let urls = "http://www.geeksforgeeks.org/"
    let result;

    // Regex pattern for checking
    var pattern = /^https:\/\//i;

    // Check if pattern is there in the string 
    // or not with .test() method
    if (pattern.test(urls)) {
        result = "true";
        console.log("inside if",pattern.test(urls))
        console.log(result)
    }
    else {
        result = "false";
        console.log(result)
    }
}
absolute_url()

//Problem one leetcode========================================

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for(var i =0 ;i<=n;i++){
        for(var j =i+1;j<=n;j++){
           let newSum= nums[i]+nums[j]
            
            if(newSum===target)
                {
                    console.log("[" + nums[i] +"," + nums[j] + "]")
                    console.log("[" + i +"," + j + "]")
                    var number = new Array()
                    number[0]=i;
                    number[1]=j
                    return number
                }
        }
    }
    
};


var nums = [6,5,7,8,9,3]
let target = 10
var n = nums.length
twoSum(nums,target)





//Problem 2 

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// l1={2,3,5}   l2={2,7,3} = {4,0,9}

 var addTwoNumbers = function(l1, l2) {
    
};