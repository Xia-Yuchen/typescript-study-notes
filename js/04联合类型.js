/**
 * 联合类型
 * 联合类型（Union Types）表示取值可以为多种类型中的一种
 */
// 联合类型使用 | 分隔每个类型
let myFavoriteUnionNumber;
myFavoriteUnionNumber = 'five';
myFavoriteUnionNumber = 5;
/*
    let myFavoriteUnionNumber: string | number
    的含义是允许 myFavoriteNumber 的类型是 string 或者 number，但是不能是其他类型
*/
// 访问联合类型的属性或方法
// 当 ts 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法
/*
function getLength(something:string|number): number {
    return something.length;
    // 报错
    // length 不是 string 和 number 的共有属性，所以会报错
};
*/
// 访问 string 和 number 的共有属性 toString 是没问题的
function getString(something) {
    return something.toString();
}
/*

联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型
let myFavoriteNumber: string | number; // 定义 string | number 类型
myFavoriteNumber = 'seven'; // 推断类型为 string
console.log(myFavoriteNumber.length); // 5
myFavoriteNumber = 7; // 推断类型 number
console.log(myFavoriteNumber.length); // number 没有 .length 方法 编译时报错

*/ 
