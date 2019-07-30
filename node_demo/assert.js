const assert = require('assert')

// assert(2 < 1, '断言失败')

const obj1 = { a: { b: 1 } };
const obj2 = { a: { b: 1 } };
const obj3 = { a: { b: '1' } };


// assert.deepEqual(变量，预期值，错误信息)   变量 == 预期值
// assert.deepStrictEqual(变量，预期值，错误信息)  变量 === 预期值
// 同样也是错误的时候抛出信息，正确的时候继续默默执行
assert.deepEqual(obj1, obj2, '不等哦'); // true
assert.deepEqual(obj1, obj3, '不等哦'); // true
assert.deepStrictEqual(obj1, obj2, '不等哦'); // true
assert.deepStrictEqual(obj1, obj3, '不等哦'); // false，这个会抛出错误信息
