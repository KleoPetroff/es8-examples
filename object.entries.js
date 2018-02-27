const obj = { a: 24, b: 42, c: 404 };

console.log(Object.entries(obj));

for(let [key, value] of Object.entries(obj)) {
  console.log(`key: ${key}, value: ${value}`);
}

