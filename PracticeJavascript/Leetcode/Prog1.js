// /**
//  * @param {number} x
//  * @return {number}
//  */
//  var reverse = function(x) {
//     let newVar = ""
//     //123
//     //321
//     let variable = x.toString()
//     let flag = ""
//     for(let i=0; i < variable.length; i++){
//         if(variable[i] == "+" || variable[i] == "-"){
//             console.log(variable[i])
//             flag = variable[i]
//             continue
//         }
//         newVar += (variable[i] * Math.pow(10,i))
//     }
//     return newVar
// };


// const reverse = x => {
//     const limit = 2147483648;
//     const k = x < 0 ? -1 : 1;
//     const n = Number(String(Math.abs(x)).split('').reverse().join(''));
//     return n > limit ? 0 : n * k;
// };

// let  x = 220
// x.reverse
let x = +0;
let y = -0;
if(x==y){
    console.log("true")
}
else{
    console.log("false")
}