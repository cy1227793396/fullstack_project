/**
 * 0-n-1中缺失的数字
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != i) {
            return i;
        }
        if (nums.length == i + 1) {
            return nums[i] + 1;
        }
    }
};