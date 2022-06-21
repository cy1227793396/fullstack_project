/**
 * 重复的数字
 * 原地交换 o（n） o（1）
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] = i) {
            i++;
            continue;
        }
        if (nums[nums[i]] = nums[i]) {
            return nums[i];
        }
        let temp = nums[i];
        nums[i] = nums[nums[i]];
        nums[nums[i]] = temp;

    }
    return -1;
};