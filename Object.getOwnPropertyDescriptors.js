const obj = { a: 24 };

console.log(Object.getOwnPropertyDescriptors(obj));

const newObj = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));

console.log(newObj);

obj.a = 42;

console.log(newObj);