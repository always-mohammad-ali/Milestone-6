const person ={
    name:'ali', 
    address:{
       vill:'gopalpur',
       street:45,
       thana:'enayetpur'
    }, 
    income:45000,
    child:['sali', 'mali', 'bali']

}

console.log(person);
const jsonStringify = JSON.stringify(person);
console.log(jsonStringify);
const stringifyType = typeof(jsonStringify);
console.log(stringifyType);

const jsonParse = JSON.parse(jsonStringify);
console.log(jsonParse);
const parseType = typeof(jsonParse);
console.log(parseType);