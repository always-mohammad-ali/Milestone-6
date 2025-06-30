const numbers = [2, 3, 4, 5, 10];

function double(num){
    const result = num*2;
    return result;
}

const output = numbers.map(double);
console.log(output)

const numbers2 = [34, 54, 23];

const triple = x => x*3;

const tripleOutput = numbers2.map(triple);
console.log(tripleOutput);

const numbers3 = [50, 100];
const fourTimes = numbers3.map(x=>x*4);
console.log(fourTimes);

const num4 = [500, 1000];
const add = num4.map(ad => ad+500);
console.log(add);

const divide = num4.map(div => div/2);
console.log(divide);

const names = ['ali', 'kali', 'sali', 'mali'];
const nameLength = names.map(nam => nam.length);
console.log(nameLength);

const firstLetter = names.map(firstL => firstL[0]);
console.log(firstLetter);

const nam = names.forEach(y => console.log(y));
console.log(nam);