function mostFrequent(arr) {
  let freq = {};

  // Frequency count
  for (let i = 0; i < arr.length; i++) {
    if (freq[arr[i]] === undefined) {
      freq[arr[i]] = 1;
    } else {
      freq[arr[i]]++;
    }
  }

  // Find maximum frequency
  let max = 0;

  for (let key in freq) {
    if (freq[key] > max) {
      max = freq[key];
    }
  }

  //   Find the number
  for (let key in freq) {
    if (freq[key] === max) {
      return Number(key);
    }
  }
}

console.log(mostFrequent([2, 5, 2, 8, 5, 2, 8, 8, 8]));
