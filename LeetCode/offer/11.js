/**
 * 旋转数组中的最小数字
 * 二分查找 o（logn）
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function(numbers) {
    let low = 0;
    let high = numbers.length - 1;
    while (low < high) {
        const mid = low + Math.floor((high - low) / 2);
        if (numbers[mid] < numbers[high]) {
            high = mid;
        } else if (numbers[mid] > numbers[high]) {
            low = mid + 1;
        } else {
            high = high - 1;
        }

    }
    return numbers[low];
};