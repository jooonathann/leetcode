const twoSum = function (nums, target) {
  const map1 = new Map();
  for (let i = 0; i < nums.length; i += 1) {
    const diff = target - nums[i];
    if (map1.has(diff)) {
      return [map1.get(diff), i];
    }
    map1.set(nums[i], i);
  }
  return [];
};

twoSum([2, 7, 11, 15], 9);
