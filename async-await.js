// 4 async variants

// async function hey() { }
// const hey = async function hey() {};
// const obj = { async hey() {} }
// const hey = async () => {};

// async functions aways return Promises

async function asyncPromise () {
  return 42;
}

async function asyncPromise2 () {
  return 43;
}

async function asyncPromise3 () {
  return 44;
}

console.log(asyncPromise());

asyncPromise().then(value => {
  console.log(value)
});

async function asyncReject() {
  throw new Error('rejected');
}

asyncReject().catch(err => {
  console.log(err);
});

async function multipleAsync() {
  const result = await asyncPromise();
  console.log(result);
  const result2 = await asyncPromise2();
  console.log(result2);
  const result3 = await asyncPromise3();
  console.log(result3);
}

async function multipleAsyncParallel() {
  const [result1, result2] = await Promise.all([
    asyncPromise(),
    asyncPromise2()
  ]);

  console.log(result1, result2);
}

multipleAsync();
multipleAsyncParallel()




