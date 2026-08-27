function twoSum(arr, target) {
  let seen = {};
  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    if (seen[complement] !== undefined) {
      return [seen[complement], i];
    } else {
      seen[arr[i]] = i;
    }
  }
}
let arr = [2, 4, 6, 8, 6];
console.log(twoSum(arr, 12));
