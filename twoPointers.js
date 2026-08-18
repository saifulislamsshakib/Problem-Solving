// first element r last element swap hobe

// let arr = [5, 10, 15, 20];

// let left = 0;
// let right = 3;

// let temp = arr[left];
// arr[left] = arr[right];
// arr[right] = temp;

// console.log(arr);

// first er 2 ta last e swap

// let arr = [10, 20, 30, 40, 50];

// let left = 0;
// let right = arr.length - 1;

// while (left < right) {
//   let temp = arr[left];
//   arr[left] = arr[right];
//   arr[right] = temp;

//   left++;
//   right--;
// }

// console.log(arr);

// function twoPointers(arr) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left < right) {
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;

//     left++;
//     right--;
//   }
//   return arr;
// }
// let arr = [10, 20, 30, 40, 50];
// console.log(twoPointers(arr));

function twoPointer(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (right > left) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    right--;
    left++;
  }
  return arr;
}
let arr = [10, 20, 30, 1, 5];
console.log(twoPointer(arr));
