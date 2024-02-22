/**
 * 类型推论
 * 如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。
 */
// 主要有两种情况
// 情况1：声明并赋值，会默认指定为赋值参数的类型
let myFavoriteNum1 = 'seven';
// 按照推论 指定类型为 string
// myFavoriteNum = 'one'; // 可以
// myFavoriteNum = 123; // 报错
// 情况2：如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查
let myFavoriteNum2;
// 类型 推论为 any
myFavoriteNum2 = 'seven';
myFavoriteNum2 = 7;
