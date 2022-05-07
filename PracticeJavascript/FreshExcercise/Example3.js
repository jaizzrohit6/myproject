// let arr =  [1,2,3,3,2,1,4,5,4,6]

// arr.filter(newArr=>{
//     newArr != arr.includes
// })

// // console.log(...new Set(arr))
// // let unichar = []
// let dupchar = []
// // arr.forEach(char=>{
// //     dupchar.push(char)
// //     if(!dupchar.includes(char)){
// //         unichar.push(char)
// //     }
// // })
// // console.log(unichar)

// function totalString(input){
//     let len = input.length
//     let str = ""
//     let result = "" +","+ input[0] +"," + input[1] + "," + input 
//     console.log("result====",result)

//     for(let i = 0 ; i<= len;i++){
//         str = "" + "," + input[i]
//     }
//     return str
// }
// let input = "ab"

// console.log(totalString(input))



// set to store all the subsequences


// let st = new Set();

// function subsequence(str)
// {
// 	for (let i = 0; i < str.length; i++) {
// 		for (let j = str.length; j > i; j--) {
// 			let sub_str = str.substr(i, i+j);
// 			st.add(sub_str);
// 			for (let k = 1; k < sub_str.length; k++) {
// 				let sb = sub_str;
// 				sb =sb.replace(sb[k],"");
// 				subsequence(sb);
// 			}
// 		}
// 	}
// }

// Driver Code

let s = "ab";
subsequence(s);
for (let i of st){
    console.log(i)
}









