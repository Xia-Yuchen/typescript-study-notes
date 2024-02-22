// 对象类型——接口 interfaces
// 在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型
;
let newTom = {
    name: 'newTom',
    gender: 'male',
};
let newtom2 = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};
// newtom2.id = 10086; // 只读属性后续无法修改 编译报错
// **** 注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
