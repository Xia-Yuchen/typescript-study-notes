// 原始数据类型：
// 布尔值、 数值、 字符串、 null、 undefined
/**
 * 布尔值   boolean
 */
let isDone = true;
// 注意：使用构造器函数 Boolean 创建的对象不是布尔值
// let createdByNewBoolean: boolean = new Boolean(1); // 报错 new Boolean(1) 是对象 不是 boolean
// 直接用 Boolean 也可以返回一个 boolean 类型
let createByBoolean = Boolean(1);
// console.log('[createByBoolean]', createByBoolean); // true
/**
 * 数值 number
 */
let decLiteral = 6; // 十进制
let hexLiteral = 0xf00d; // 十六进制
let binaryLiteral = 0b1010; // 二进制
let octalLiteral = 0o744; // 八进制
let notANumber = NaN;
let infinityNumber = Infinity;
// console.log(decLiteral, hexLiteral, binaryLiteral, octalLiteral, notANumber, infinityNumber);
/**
 * 字符串 string
 */
let myName = "JingLuo";
let myAge = 25;
// 模板字符串
let sentence = `Hello, my name is ${myName}. I'll be ${myAge + 1} years old next year.`;
console.log('[模板字符串]', sentence);
/**
 * 空值 void
 */
// 在 ts 中，可以用 void 表示没有任何返回值的函数
function voidFun() {
    console.log("我是一个没有任何返回值的函数 void");
}
// 声明一个 void 类型的变量没有什么意义，因为你只能将它赋值为 undefined 和 null（只在非严格模式下）
// let unusable: void = undefined;
/**
 * Null 和 undefined
 */
// 在 ts 中，可以使用 null 和 undefined 来定义这两个原始数据类型：
let n = null;
let u = undefined;
// null 和 undefined 是所有类型的子类型，可以赋值给 其它类型
let uNum = undefined;
let nString = null;
