// Array concat method 

var num1=[11,12,13],
    num2=[14,15,16],
    num3=[17,18,19]

    console.log(num1.concat(num2,num3))

//copywithin

var array = [1, 2, 3, 4, 5, 6, 7];
 
// placing at index position 0 the element
// between index 3 and 6
// array.copyWithin(target, start, end)
    console.log("Array " + array.copyWithin(0, 2, 6));

//array.enteries
//The arr.entries() method is used to get a new Array that contains the key and value pairs for each index of an array.
    var lnaguages = ["HTML", "CSS", "JavaScript", "ReactJS"];
            var g = lnaguages.entries();
  
            for (x of g) {
                console.log("geeks")
            }

//The arr.every() method checks whether all the elements of the array satisfy the given condition or not that is provided by a method passed to it as the argument. 
//arr.every(callback(element[, index[, array]])[, thisArg])

// JavaScript code for every() method
    function isodd(element, index, array) {
        return element % 2 == 0;
    }
 
    function func() {
        var arr = [56, 92, 18, 88, 12];
 
        // Check for even number
        var value = arr.every(isodd)
        console.log("value===",value)
    }