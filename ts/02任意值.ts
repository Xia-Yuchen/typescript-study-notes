/**
 * 任意值 any
 * 任意值（Any）用来表示允许赋值为任意类型
 */

// any 类型 允许被赋值为任意类型
let myFavoriteNumber: any;
myFavoriteNumber = 'five'; // 字符串
myFavoriteNumber = 5; // 数字
myFavoriteNumber = true; // 布尔
myFavoriteNumber = []; // 数组
myFavoriteNumber = {}; // 对象
myFavoriteNumber = undefined; // undefined
myFavoriteNumber = null; // null

// any 的属性和方法
// 允许在任意值上访问任何属性
let anyThing: any = 'hello';

// 未声明类型的变量
// 变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型
let something;
something = 'seven';
something = 7;
