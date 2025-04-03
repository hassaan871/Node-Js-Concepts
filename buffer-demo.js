const buffOne = Buffer.alloc(10);
console.log(buffOne);

const buffFromString = Buffer.from("Hello");
console.log(buffFromString);

const buffFromArrayOfIntegers = Buffer.from([1, 2, 3, 4, 5]);
console.log(buffFromArrayOfIntegers);

buffOne.write("Sangam");
console.log("After writing Sangam to buffOne: ", buffOne.toString());

console.log("0th index of buffOne: ", buffFromString[0]);

console.log('type of: ', typeof buffOne);

console.log(buffFromString.slice(0, 3));

const concatBuffs = Buffer.concat([buffOne, buffFromString]);
console.log(concatBuffs);

console.log(concatBuffs.toJSON());


