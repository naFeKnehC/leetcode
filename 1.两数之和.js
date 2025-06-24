/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
[1, 2, 3];

var twoSum = function (nums, target) {
  const lastMap = {};

  for (let i = 0; i < nums.length; i++) {
    const currentValue = nums[i];
    const targetValue = target - currentValue;
    const targetIndex = lastMap[targetValue];

    if (targetIndex !== undefined) {
      return [targetIndex, i];
    } else {
      lastMap[currentValue] = i;
    }
  }
};
