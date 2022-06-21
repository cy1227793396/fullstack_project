/**
 * 两数之和 暴力
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // let s=new Set();
    // for(let i=0;i<nums.length;i++){
    //     s[i]=nums[i];
    // }
    for (let i = 0; i < nums.length; i++) {
        let temp = target - nums[i];
        for (let j = 0; j < nums.length; j++) {
            if (temp == nums[j] && i != j)
                return [i, j];
        }
    }
};