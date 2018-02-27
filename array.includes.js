const array = ['Max', 'Mat', 'Thomas', 'Angel', 'Kim', 'Meg'];

console.log(array.includes('Max'));

console.log(array.indexOf('Max') >= 0);

console.log(array.includes('Steven'));

const nanArr = [NaN, NaN, NaN];

console.log(nanArr.includes(NaN));

console.log(nanArr.indexOf(NaN))

console.log([-0].includes(+0));
console.log([+0].includes(-0));
