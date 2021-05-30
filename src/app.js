// Array concat method 
//syntax ----- var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
var num1=[11,12,13],
    num2=[14,15,16],
    num3=[17,18,19]

    console.log(num1.concat(num2,num3))

//copywithin

var array = [1, 2, 3, 4, 5, 6, 7];
 
// placing at index position 0 the element
// between index 3 and 6
console.log("Array " + array.copyWithin(0, 3, 6));


