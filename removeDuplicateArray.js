// function removeDuplicates(arr) {
//   let left = 0;
//   let right = 1;

//   while (right < arr.length) {
//     if (arr[left] === arr[right]) {
//       right++;
//     } else {
//       left++;
//       arr[left] = arr[right];
//       right++;
//     }
//   }

//   return left + 1;
// }
// console.log(removeDuplicates([1, 1, 2, 2, 3, 3, 4]));

// let arr = [1, 1, 2, 2, 3, 3, 4];

// let left = 0;
// let right = 1;

// while (right < arr.length) {
//   if (arr[left] === arr[right]) {
//     right++;
//   } else {
//     left++;
//     arr[left] = arr[right];
//     right++;
//   }
// }

// let uniqueArr = arr.slice(0, left + 1);

// console.log(uniqueArr);

function removeDuplicates(arr) {
  let left = 0;
  let right = 1;

  while (right < arr.length) {
    if (arr[left] === arr[right]) {
      right++;
    } else {
      left++;
      arr[left] = arr[right];
      right++;
    }
  }

  let uniqueArr = arr.slice(0, left + 1);

  return uniqueArr;
}

let arr = [1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicates(arr));
