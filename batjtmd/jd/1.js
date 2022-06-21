//函数 判断文件是否为图片
/**
 * @param{string} file
 * @return {boolean} 是否为图片
 * @author cy
 * @date 
 */
function checkIsFile(file) {
    if (!file) {
        return false;
    }
    // console.log(file.split('.')[1]);
    // if (file.split('.')[1] == 'jpg') {
    //     return true;
    // }

    let imgFormats = ['jpg', 'gif', 'jpeg', 'png', 'svg', 'webp', 'awebp'];
    return imgFormats.indexOf(file.split('.')[1]) == -1 ? false : true;

}
console.log(checkIsFile('b.txt'));