// Ugly numbers are numbers whose only prime factors are 2, 3 or 5. The sequence 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, … shows the first 11 ugly numbers. By convention, 1 is included. 
// Given a number n, the task is to find n’th Ugly number.

// Examples:  

// Input  : n = 7
// Output : 8

// Input  : n = 10
// Output : 12

// Input  : n = 15
// Output : 24


//solution

//This function divides a by greatest divisible power of b
function maxDivide(a,b){
    while(a%b==0){
        a=a/b
        return a
    }

}
//Function to check if a number is ugly or not

function isUgly(number){
    number = maxDivide(number,2)
    number = maxDivide(number,3)
    number = maxDivide(number,5)

    return (number==1)?1:0
}

//Function to get the nth ugly number
function getNthUglyNo(n){
    var i = 1;
 
    // ugly number count
    var count = 1;

    // check for all integers
    // until count becomes n
    while (n > count)
    {
        i++;
        if (isUgly(i) == 1)
            count++;
    }
    return i;
}
 /* Driver Code */   
 var uglyNumber = getNthUglyNo(150);
console.log(uglyNumber)