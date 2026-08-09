// function twoSum(arr, target) {
//   let seen = {};

//   for (let i = 0; i < arr.length; i++) {
//     let complement = target - arr[i];

//     if (seen[complement] !== undefined) {
//       return [seen[complement], i];
//     }

//     seen[arr[i]] = i;
//   }
// }

// console.log(twoSum([2, 7, 11, 15], 9));

function twoSum(arr, target) {
  let seen = {};
  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    if (seen[complement] !== undefined) {
      return [seen[complement], i];
    }
    seen[arr[i]] = i;
  }
}
console.log(twoSum([3, 2, 4], 6));
