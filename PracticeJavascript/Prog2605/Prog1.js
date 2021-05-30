/*Program 1 
 Write a Progeram for counting duplicate number 
input = aabbxyzlaalyzxb
output a=4 b=3 x=2 y=2 l=2

*/
//Approach 1
const countDuplChar=function  (str){
	var arr={};
	
	for(let i =0 ; i<str.length ; i++){
		if(Object.keys(arr).includes(str[i])){
			arr[str[i]] = arr[str[i]]+1
            continue
		}
		arr[str[i]] = 1
	}
    return arr
}

let input = "aabbxyzlaalyzxbm"
console.log(countDuplChar(input))

//Approach 2 Using Regex
//      /(.)\1+/g


const countDuplChar2 = function (str){
    var result ={}
    
    var arr = str.split("").sort().join("").match(/(.)\1+/g)
    console.log(arr)

    if(arr!==null){
        arr.forEach(element => {
            result[element[0]] = element.length
            //console.log("foreach",result[element[0]] = element.length)
           // if(result(0)==1){
               // console.log(result)
           // }
        });
    }
    return result
}
console.log(countDuplChar2(input))


//===================================================================================================
/*
    Finding the first non-repeated character
    input = cbcbdde
    output= e
    // single traversal


*/


// const EXTENDED_ASCII_CODES = 256

// const first_non_repeated_character = function(str) {

//     var flags = []
//     for (let i = 0; i < EXTENDED_ASCII_CODES; i++) {
//         flags.push(-1)
//         console.log("flags",flags,flags.length)
//     }

//     for (let j = 0; j< str.length; j++) {
//         console.log(str)
//         var ch = str.charCodeAt(j)
//        // console.log("ch",ch)
//         if (flags[ch] == -1) {
//             flags[ch] = j
//            console.log("flagchif",flags,flags[ch])
//         } else {
//             flags[ch] = -2
//             console.log("flagchelse",flags,flags[ch])
//         }
//     }

//     var position = Number.MAX_SAFE_INTEGER
//     console.log(position)
//     for (let k = 0; k < EXTENDED_ASCII_CODES; k++) {
//         if (flags[k] > 0) {
//             position = Math.min(position, flags[k])
//         }
//     }

//     return str[position]
// }
// let newstr="aabbxyzlaalyzxbm"
// console.log(first_non_repeated_character(newstr))



const EXTENDED_ASCII_CODES = 256

const nonRepeatchar = function(str) {

    // var flags = []
    // for (let i = 0; i < EXTENDED_ASCII_CODES; i++) {
    //     flags.push(-1)
    //     console.log("flags",flags,flags.length)
    // }
    var flag=[]
    for (let i = 0; i< str.length; i++) {
      for(let j = i+1; j< str.length; j++){
          if(str.charCodeAt(i)==str.charCodeAt(j)){
              flag.push(i)
              console.log(flag)
              //if(Object.keys())
          }
          else{
              console.log(str[i])
          }
      }
    }

    
}
let newstr="aabbxyzlaalyzxbm"
console.log(nonRepeatchar(newstr))