/**
字符反转 双指针 单循环用while快一些
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
for(let i=0,j=s.length-1;i<=j;i++,j--)
{
    let temp=s[i];
    s[i]=s[j];
    s[j]=temp;
}
};