// ts 的函数类型

// 一个函数有输入和输出，要在 TypeScript 中对其进行约束，需要把输入和输出都考虑到，其中函数声明的类型定义较简单：
function sum(x: number, y: number): number {
    return x + y;
}
// **注意**：输入多余的（或者少于要求的）参数，是不被允许的
// sum(1, 2, 3); // 输入参数过多 编译报错
// sum(1); // 输入参数过少 编译报错

// 函数表达式
let mySum1 = function (x: number, y: number): number {
    return x + y;
}
// 上面的代码只对等号右侧的匿名函数进行了类型定义，而等号左边的 mySum，是通过赋值操作进行类型推论而推断出来的。
// 如果需要我们手动给 mySum 添加类型，则应该是这样：
let mySum2: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
};
// **注** 在 TS 的类型定义中，=> 用来表示函数的定义，左边是输入类型，需要用括号括起来，右边是输出类型。


// 用接口定义函数的形状
interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
    return source.search(subString) !== -1;
}
// 采用函数表达式|接口定义函数的方式时，对等号左侧进行类型限制，可以保证以后对函数名赋值时保证参数个数、参数类型、返回值类型不变。


// 可选参数
// 我们用 ？ 表示可选的参数
function buildName(
    firstName: string,
    lastName?: string, // lastName 设置为可选参数
): string {
    if (lastName) {
        return firstName + lastName;
    } else {
        return firstName
    }
};
// let tomcat = buildName('Tom', 'Cat'); // TomCat
// let tom = buildName('Tom'); // Tom
// **注意**：可选参数必须接在必需参数后面。换句话说，可选参数后面不允许再出现必需参数了
/* 
// 可选参数后出现了必须参数，编译报错
function buildName1(firstName?: string, lastName: string) {
    if (firstName) {
        return firstName + ' ' + lastName;
    } else {
        return lastName;
    }
} 
*/


// 参数默认值
// ts 会将添加了默认值的参数识别为可选参数
function buildName2(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName;
}
// let tomcat = buildName2('Tom', 'Dog'); // Tom Dog
// let tom = buildName2('Tom'); // Tom Cat
// **注意**：此时就不受「可选参数必须接在必需参数后面」的限制了：
function newbuildName2(firstName: string = 'Tom', lastName: string) {
    return firstName + ' ' + lastName;
}


// 剩余参数
/* 
ES6 中，可以使用 ...rest 的方式获取函数中的剩余参数（rest 参数）：
function push(array, ...items) {
    items.forEach(function(item) {
        array.push(item);
    });
}
let a: any[] = [];
push(a, 1, 2, 3);
*/
// 事实上，items 是一个数组。所以我们可以用数组的类型来定义它：
function myPush(array: any[], ...items: any[]) {
    items.forEach(item => {
        array.push(item);
    })
}
let arrA = [];
myPush(arrA, 1, 2, 3);
console.log('[arrA]', arrA);


// 重载
// 重载允许一个函数接受不同数量或类型的参数时，作出不同的处理
/* 
    比如，我们需要实现一个函数 reverse，
    输入数字 123 的时候，输出反转的数字 321，
    输入字符串 'hello' 的时候，输出反转的字符串 'olleh'
*/
// 以下是利用联合类型实现
function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
/* 
    联合模式实现方法有一个缺点，就是不能够精确的表达，
    输入为数字的时候，输出也应该为数字，
    输入为字符串的时候，输出也应该为字符串。
*/
// 为了弥补上述缺点：我们可以使用重载定义多个 reverse 的函数类型：
function newReverse(x: number): number; // 函数定义
function newReverse(x: string): string; // 函数定义
// 函数实现
function newReverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    }
    if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}
// **注意**：TypeScript 会优先从最前面的函数定义开始匹配，所以多个函数定义如果有包含关系，需要优先把精确的定义写在前面。