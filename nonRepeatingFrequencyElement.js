function firstNonRepeating(arr) {
  let freq = {};

  for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]] === undefined) {
      freq[arr[i]] = 1;
    } else {
      freq[arr[i]]++;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]] === 1) {
      return arr[i];
    }
  }
}
console.log(firstNonRepeating([4, 5, 4, 2, 5, 3]));
