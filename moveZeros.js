// let arr = [0, 5, 0, 8];
// let left = 0;
// for (let right = 0; right < arr.length; right++) {
//   if (arr[right] !== 0) {
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;
//     left++;
//   }
// }
// console.log(arr);

// let arr = [4, 0, 7, 0, 9];

// let left = 0;
// for (let right = 0; right < arr.length; right++) {
//   if (arr[right] !== 0) {
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;
//     left++;
//   }
// }
// console.log(arr);

let arr = [0, 0, 2, 1];
let left = 0;
for (let right = 0; right < arr.length; right++) {
  if (arr[right] !== 0) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
  }
}
console.log(arr);
