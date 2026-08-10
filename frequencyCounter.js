// let arr = [2, 2, 3, 4, 2, 3, 4];
// let freq = {};

// for (let i = 0; i < arr.length; i++) {
//   if (freq[arr[i]] === undefined) {
//     freq[arr[i]] = 1;
//   } else {
//     freq[arr[i]]++;
//   }
// }
// console.log(freq);

function frequentCounter(arr) {
  let fre = {};
  for (let i = 0; i < arr.length; i++) {
    if (fre[arr[i]] === undefined) {
      fre[arr[i]] = 1;
    } else {
      fre[arr[i]]++;
    }
  }
  return fre;
}
console.log(frequentCounter([1, 2, 3, 4, 5, 5, 4, 3, 2, 1, 5, 4]));
