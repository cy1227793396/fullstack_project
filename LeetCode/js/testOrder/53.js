/**
 * 连续子数组的最大和
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxsum = nums[0];
    let cursum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (cursum <= 0)
            cursum = nums[i];
        else
            cursum += nums[i];

        if (cursum > maxsum)
            maxsum = cursum;
    }
    return maxsum;
};