// 数组类型
// ts 中数组类型的定义方式有多种
/* 「类型 + 方括号」表示法 */
let fibonacci1 = [1, 1, 2, 3, 5];
// 定义的是 number[] 数字类型的数组，不能出现其它类型
// let fibonacci: number[] = [1, '1', 2, 3, 5]; // '1'是string 不属于 number 编译报错
/* 数组泛型 Array<elemType> */
let fibonacci2 = [1, 1, 2, 3, 5];
;
let fibonacci3 = [1, 1, 2, 3, 5];
/*
NumberArray 表示：只要索引的类型是数字时，那么值的类型必须是数字。
虽然接口也可以用来描述数组，但是我们一般不会这么做，因为这种方式比前两种方式复杂多了。
*/
// 类数组
// 类数组（Array-like Object）不是数组类型，比如 arguments
// function sum() {
//     let args: number[] = arguments;
// }
// 上例中，arguments 实际上是一个类数组，不能用普通的数组的方式来描述，而应该用接口：
function summ() {
    let args = arguments;
}
// 在这个例子中，我们除了约束当索引的类型是数字时，值的类型必须是数字之外，也约束了它还有 length 和 callee 两个属性。
/*
事实上常用的类数组都有自己的接口定义，如 IArguments, NodeList, HTMLCollection 等：
function sum() {
    let args: IArguments = arguments;
}
其中 IArguments 是 TypeScript 中定义好了的类型，它实际上就是：
interface IArguments {
    [index: number]: any;
    length: number;
    callee: Function;
}
*/
// any 在数组中的应用
// 一个比较常见的做法是，用 any 表示数组中允许出现任意类型：
let list = ['xcatliu', 25, { website: 'http://xcatliu.com' }];
