// 对象类型——接口 interfaces
// 在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型

/* 
什么是接口:
在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）
TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述
*/

// 以下是一个简单的例子
interface Person {
    name: string;
    age: number;
};
// let tom: Person = {
//     name: 'Tom',
//     age: 25
// };
// 上面的例子中，我们定义了一个接口 Person，接着定义了一个变量 tom，它的类型是 Person。这样，我们就约束了 tom 的形状必须和接口 Person 一致。
// 接口一般首字母大写。
/* 
定义的变量比接口少了一些属性是不允许的：
let tom: Person = {
    name: 'Tom'
};
相比于定义的接口 Person 少了 age 属性，编译报错

多一些属性也是不允许的：
let tom: Person = {
    name: 'Tom',
    age: 25,
    gender: 'male'
};
相比于定义的接口 Person 多了 gender 属性，编译报错
*/
// **** 赋值的时候，变量的形状必须和接口的形状保持一致。


// 接口 interface 的可选属性
interface Person1 {
    name: string;
    age?: number; // age 为 Person1 接口的可选属性
}


// 接口 interface 的任意属性
interface Person2 {
    name: string;
    age?: number; // 可选属性
    [propName: string]: any; // 任意属性
}
let newTom:Person2 = {
    name: 'newTom',
    gender: 'male',
}
// 使用 [propName: string] 定义了任意属性取 string 类型的值。
// 需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：
/* 
interface Person {
    name: string;
    age?: number;
    [propName: string]: string;
}
// 定义了任意属性类型为 string ，而 age 的类型为 number 不属于 string 的子属性，编译报错 
*/

/* 
一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型：
interface Person {
    name: string;
    age?: number;
    [propName: string]: string | number;
}
*/


// 只读属性
// 可以用 readonly 定义只读属性，只有创建的时候能够赋值，后续不能修改
interface Person3 {
    readonly id: number; // 设置只读属性
    name: string;
    age?: number;
    [propName: string]: any;
}
let newtom2: Person3 = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};
// newtom2.id = 10086; // 只读属性后续无法修改 编译报错
// **** 注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候