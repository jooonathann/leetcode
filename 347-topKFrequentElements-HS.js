const topKFrequent = function (nums, k) {
  const map1 = new Map();
  for (let i = 0; i < nums.length; i += 1) {
    if (!map1.has(nums[i])) {
      map1.set(nums[i], 1);
    } else {
      map1.set(nums[i], map1.get(nums[i]) + 1);
    }
  }
  const topElements = Array.from(map1.entries());
  const sortedElements = topElements.sort((a, b) => b[1] - a[1]);
  const finalArray = [];
  for (let i = 0; i < k; i += 1) {
    finalArray.push(sortedElements[i][0]);
  }
  return finalArray;
};
