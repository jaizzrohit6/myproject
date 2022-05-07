//remove Element

// var removeElement = function(nums, val) {
//     let j = 0;
    
//     for(let i = 0; i < nums.length; i++) {
//       if (nums[i] !== val) {
//         nums[j] = nums[i];
//         j++;
//       }
//     }
    
//     return j;
//   };


  let arr=[0,1,2,2,3,7,0,3]
  let val = 2


//perfect solutiom

  var removeElement = function(nums, val) {
    var len = nums.length;
    var count = 0;
    for (var i = 0; i < len; i++) {
      if (nums[i] !== val){
        //nums[count++] = nums[i];
        count++
      } 
    }
    return count;
  };
  console.log("remove element",removeElement(arr,val))




//   function removeElement(nums: number[], val: number): number {
//     for (let i = 0; i < nums.length;) {
//       if (nums[i] === val) {
//         nums.splice(i, 1);
//       } else {
//         i++;
//       }
//     }
//     return nums.length;
//   }; 

// var removeElement = function(nums, val) {
//     while (nums.includes(val)){
//         nums.splice(nums.indexOf(val),1);
//     }
//     return nums.length;
// };