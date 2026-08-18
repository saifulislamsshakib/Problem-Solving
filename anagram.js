function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let freq = {};

  // প্রথম String-এর frequency
  for (let i = 0; i < str1.length; i++) {
    if (freq[str1[i]] === undefined) {
      freq[str1[i]] = 1;
    } else {
      freq[str1[i]]++;
    }
  }

  // দ্বিতীয় String দিয়ে count কমানো
  for (let i = 0; i < str2.length; i++) {
    if (freq[str2[i]] === undefined) {
      return false;
    }

    freq[str2[i]]--;
  }

  return true;
}

console.log(isAnagram("cat", "act"));
