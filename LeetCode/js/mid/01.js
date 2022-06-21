/**
 * 只出现一次的数字
 * 异或运算
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let res=0;
for(var i=0;i<nums.length;i++){
   res=res^nums[i];
}
return res;
};