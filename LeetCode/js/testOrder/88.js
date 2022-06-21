 /**
  * 合并升序数组
  * 双指针
  * @param {number[]} nums1
  * @param {number} m
  * @param {number[]} nums2
  * @param {number} n
  * @return {void} Do not return anything, modify nums1 in-place instead.
  */
 var merge = function(nums1, m, nums2, n) {
     let n1 = 0,
         n2 = 0;
     for (let i = 0; i < m + n; i++) {

         if (nums1[n1] <= nums2[n2]) {
             nums1[i] = nums1[n1];
             n1++;
         } else {
             nums1[i] = nums2[n2];
             n2++;
         }
     }

 };
 /**
  * 先合并再排序 两行代码
  * @param {number[]} nums1
  * @param {number} m
  * @param {number[]} nums2
  * @param {number} n
  * @return {void} Do not return anything, modify nums1 in-place instead.
  */
 var merge = function(nums1, m, nums2, n) {
     nums1.splice(m, nums1.length - m, ...nums2);
     nums1.sort((a, b) => a - b);

 };