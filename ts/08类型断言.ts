/**
 * 类型断言
 * 类型断言（Type Assertion）可以用来手动指定一个值的类型
 */

/* 
    语法：
    值 as 类型  or  <类型>值
    **注意**：在 tsx 语法（React 的 jsx 语法的 ts 版）中必须使用前者，即 值 as 类型
    推荐使用：  值 as 类型
*/


/* 
    类型断言的用途
    常见用途有以下几种：
        1. 将一个联合类型断言为其中一个类型
        2. 将一个父类断言为更加具体的子类
        3. 将任何一个类型断言为 any
        4. 将 any 断言为一个具体的类型
*/
// 1. 将一个联合类型断言为其中一个类型
/* 
    当 TS 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型中共有的属性或方法
    而有时候，我们确实需要在还不确定类型的时候就访问其中一个类型特有的属性或方法，比如：
    */
interface Cat {
    name: string;
    run(): void;
};
interface Fish {
    name: string;
    swim(): void;
};
/* 
function isFish(animal:Cat|Fish) {
    if (typeof animal.swim === 'function') {
        return true;
    }
    return false;
}
由于以上例子 swim 不是 Cat 和 Fish 共有的属性和方法，编译报错 
*/
// 为了实现上述例子，可以使用类型断言，将 animal 断言成 Fish
function isFish(animal:Cat|Fish) {
    if (typeof (animal as Fish).swim === 'function') {
        return true;
    }
    return false;
}
/* 
    **注意**：
    类型断言只能够「欺骗」TypeScript 编译器，无法避免运行时的错误，反而滥用类型断言可能会导致运行时错误：
    interface Cat {
        name: string;
        run(): void;
    }
    interface Fish {
        name: string;
        swim(): void;
    }

    function swim(animal: Cat | Fish) {
        (animal as Fish).swim();
    }

    const tom: Cat = {
        name: 'Tom',
        run() { console.log('run') }
    };
    swim(tom);
    // tom 是 Cat 类型没有 swim方法，运行会出错
    // Uncaught TypeError: animal.swim is not a function`
    // 原因是 (animal as Fish).swim() 这段代码隐藏了 animal 可能为 Cat 的情况，将 animal 直接断言为 Fish 了，而 TypeScript 编译器信任了我们的断言，故在调用 swim() 时没有编译错误。
*/


// 2. 将一个父类断言为更加具体的子类