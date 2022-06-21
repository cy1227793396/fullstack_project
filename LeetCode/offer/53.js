/**
 * 有序数组找target出现次数
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let count = 0;
    if (target > nums[nums.length - 1] || target < nums[0]) {
        return 0;
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == target) {
            count++;
            if (nums[i + 1] != target) {
                break;
            }
        }
    }
    return count;
};