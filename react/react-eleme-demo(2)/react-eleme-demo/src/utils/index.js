/**
 * @author  文长
 * @func 根据path 判断是否在数组配置中
 * @params {path string}
 * @return boolean 
 */
export const isPathPartlyExisted = (path) => {
    // 1. path 全部匹配 /cities
    // 2. path 多了  /homedetail/: id/cmments/:id
    const arr = ['/cities', '/homedetail'];
    // // 完全匹配
    // if (arr.indexOf(path) != -1) return true
    // // 部分匹配 
    // if (path.lastIndexOf('/') !== 0) {
    //     const reg = /^(\/[\w]+)\//
    //     const matchArr = path.match(reg)
    //     const partlyPath = matchArr[1]?matchArr[1]:''
    //     if (partlyPath) {
    //         return arr.indexOf(partlyPath) != -1
    //     }
    // }
    //根据'/'切割 字符串会被/分割为一个一个的数组元素
     let pathRes=path.split('/')
     if(pathRes[1]&&arr.indexOf('/'+pathRes[1])!=-1) return true
     return false


    // arr.forEach(item => {
    //     // 完全匹配
    //     if (item === path) {
    //         return true
    //     }
    //     // 部分匹配 
    //     if (path.lastIndexOf('/') !== 0) {
    //         // 正则 path 的 第二个/ 前面的部分
    //         // /  转义  \/ 
    //         // \w 一个字符 
    //         // \w+ 一个或多个字符
    //         const reg = /^(\/[\w]+)\//
    //         const matchArr = path.match(reg)
    //         const partlyPath = matchArr[1]?matchArr[1]:''
    //         if (partlyPath) {
    //             return partlyPath === item
    //         }
    //     }

    // })
    return false
}