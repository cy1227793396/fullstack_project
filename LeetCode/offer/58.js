/**
 * 左旋字符串
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
    let ns = [];
    for (let i = 0; i < s.length; i++) {
        if (i + n < s.length) {
            ns[i] = s[i + n];
        } else {
            ns[i] = s[i + n - s.length];
        }
    }
    return ns.join('');
};