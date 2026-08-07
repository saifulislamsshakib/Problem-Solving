let arr = [45, 12, 89, 7, 23];

let max = arr[0];
let min = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }
  if (arr[i] > max) {
    max = arr[i];
  }
}
console.log(max, min);
