// let arr = [45, 12, 89, 7, 23];
// let min = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }
// console.log(min);

// let arr = [-15, -2, -30, -8, -1];

// let min = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }
// console.log(min);

// function minNumber(arr) {
//   let min = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   return min;
// }
// console.log(minNumber([45, 12, 89, 7, 23]));

// let arr = [5, 12, 8, 20, 15];
// let target = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] === 20) {
//     target = arr[i];
//   }
// }

// console.log(target);
// console.log(arr.indexOf(target));

// let arr = [10, 25, 30, 45, 60];
// let target = 45;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === target) {
//     console.log("Index number is", i);
//   }
// }

// let arr = [10, 25, 30, 45, 60];
// let target = 60;

// let found = false;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === target) {
//     console.log("Found at index", i);
//     found = true;
//   }
// }

// if (found === false) {
//   console.log("Not Found");
// }

let arr = [10, 25, 30, 45, 60];
let target = 100;
let valu = false;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === target) {
    console.log("found at", i);
    valu = true;
  }
}
if (valu === false) {
  console.log("not found");
}
