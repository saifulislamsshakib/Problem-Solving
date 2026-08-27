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
// console.log(twoSum([3, 2, 4], 6));

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
// console.log(twoSum([3, 2, 4], 5));

// function twoSum(arr, target) {
//   let store = {};

//   for (let i = 0; i < arr.length; i++) {
//     let complement = target - arr[i];
//     if (store[complement] !== undefined) {
//       return [store[complement], i];
//     }
//     store[arr[i]] = i;
//   }
// }
// let arr = [2, 4, 6, 8, 10];
// console.log(twoSum(arr, 10));

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
// let arr = [2, 4, 6, 8, 6];
// console.log(twoSum(arr, 10));

function twoSum(arr, target) {
  let seen = {};
  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    if (seen[complement] !== undefined) {
      return [seen[complement], i];
    } else {
      seen[arr[i]] = i;
    }
  }
}
let arr = [2, 4, 6, 8, 6];
console.log(twoSum(arr, 12));

// // {
//       2:0
//       4:1
//       6:2
//        return [seen[complement]=?, i=3];
// // }
