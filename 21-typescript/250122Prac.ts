// // typescript generic 함수 실습 1번
// function arrElement<T>(arr: T[], index: number) {
//     return arr[index];
// }
// console.log(arrElement<string>(['a'], 0));

// typescript generic 함수 실습 2번
function arrElement<T>(arr: T[], index: number) {
    if (arr.length <= index) {
        return false;
    } else {
        return arr[index];
    }
}
console.log(arrElement<string>(['a', 'b', 'c'], 4));
console.log(arrElement<string>(['a', 'b', 'c'], 3));
console.log(arrElement<string>(['a', 'b', 'c'], 2));
