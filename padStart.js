const receiver = 'hey';

console.log(receiver.padStart(2, 'abv')); // if the receiver is as long as, or longer than maxLength, it is returned unchanged.

console.log(receiver.padStart(13, 'abv')); // prefixes the receiver with fillString, until its length is maxLength

console.log(receiver.padStart(10, 'abcdefghij'));



