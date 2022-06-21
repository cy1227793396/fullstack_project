/** 
 * 反转 字符串中的单词
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const n = s.length;
    const ret = [];
    let i = 0;
    while (i < n) {
        let start = i;
        while (i < n && s.charAt(i) != ' ') {
            i++;
        }
        for (let j = start; j < i; j++) {
            ret.push(s.charAt(start - 1 + i - j));
        }
        while (i < n && s.charAt(i) == ' ') {
            i++;
            ret.push(' ');

        }
    }
    return ret.join('');
};