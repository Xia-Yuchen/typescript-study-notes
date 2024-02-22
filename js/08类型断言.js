/**
 * 类型断言
 * 类型断言（Type Assertion）可以用来手动指定一个值的类型
 */
;
;
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
function isFish(animal) {
    if (typeof animal.swim === 'function') {
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
    