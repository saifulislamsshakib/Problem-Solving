// let arr = ["A", "B", "C", "D"];
// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }

// arr reverse kore notun arr te dukano

// let arr = [10, 20, 30, 40];

// let reversed = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//   reversed.push(arr[i]);
// }

// console.log(reversed);

// function arraryReverse(arr) {
//   let reversed = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversed.push(arr[i]);
//   }
//   return reversed;
// }
// console.log(arraryReverse([1, 2, 3, 4, 5]));

// function stringReverse(str) {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed = reversed + str[i];
//   }
//   return reversed;
// }
// console.log(stringReverse("shakib"));

// function stringReverse(str) {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }

// console.log(stringReverse("12345"));

function numberReverse(num) {
  let str = num.toString();
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return Number(reversed);
}

console.log(numberReverse(12345));
