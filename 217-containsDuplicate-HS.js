// HashSet
// const containsDuplicate = function (nums) {
//   const set1 = new Set(nums)
//   return set1.size === nums.length ? false: true
// };

// /**

const containsDuplicate = function (nums) {
  const set1 = new Set();
  for (let i = 0; i < nums.length; i += 1) {
    if (set1.has(nums[i]) === true) return true;
    set1.add(nums[i]);
  }
  return false;
};
