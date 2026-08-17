// function isPalindrome(arr) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     if (arr[left] !== arr[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// }
// console.log(isPalindrome([1, 2, 3, 2, 1]));

// function isPalindrome(arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (right > left) {
//     if (arr[right] !== arr[left]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// }
// console.log(isPalindrome([1, 2, 3, 4, 5]));

// function isPalindrome(arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (right > left) {
//     if (arr[right] !== arr[left]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// }
// console.log(isPalindrome([5, 6, 6, 5]));

// function isPalindrome(arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   while (left < right) {
//     if (arr[left] !== arr[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// }

// console.log(isPalindrome([7, 8, 9, 8, 7]));

var isPalindrome = function (x) {
  let str = x.toString();
  let left = 0;
  let right = str.length - 1;

  while (right > left) {
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
};

console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false
console.log(isPalindrome(121)); // true
