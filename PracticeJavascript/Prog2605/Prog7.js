 var isPalindrome = function(x) {
    let rem,temp,final=0
    
    temp=x
    while(x>0){
        rem=x%10;
        x=parseInt(x/10)
        final=final*10+rem
    }
    console.log(final)
    if(final==temp){
        console.log("number is palindrome")
    }
    else{
        console.log("number is not palindrome")
    }
};

isPalindrome(-17892)

var isReverse= function(x) {
    let reverse = 0;
    let sign = Math.sign(x);
    if (sign === -1) {
        x = x*sign;
    }
    while (x > 0) {
        reverse = (reverse * 10) + (x%10);
        x = parseInt(x/10, 10);
    }
    return reverse * sign;
};


console.log(isReverse(-123))

// max pair product without using sort function 
// time complexity = O(n2) 
function maxProductPair(arr,n){
    let a =arr[0];
    let b= arr[1]
    
    for(let i =0;i<=n;i++){
        for(let j=i+1;j<=n;j++){
            if(arr[i]*arr[j] > a*b){
                a=arr[i];
                b=arr[j];
            }
        }
    }
    console.log("max product pair",a,b)
}

let array=[8,3,7,9,6]
let n = array.length;
maxProductPair(array,n)

