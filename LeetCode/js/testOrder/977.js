/**
 * 有序数组的平方
 * 双指针
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let n = nums.length - 1;
    let number = [];
    for (let i = 0, j = n, s = n; i <= j;) {
        if (nums[i] * nums[i] > nums[j] * nums[j]) {
            number[s] = nums[i] * nums[i];
            i++;
        } else {
            number[s] = nums[j] * nums[j];
            j--;
        }
        s--;
    }
    return number;
};