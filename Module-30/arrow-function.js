const getAge = (person) => person.age;
const getName = (person) => person.name;
const student = {name:'ali', age:25};
const studentAge = getAge(student);
console.log(studentAge)

const studentName = getName(student);
console.log(studentName);

const getRoll = (roll) => roll[3];
const rollNo = getRoll([1,2,3,4,5,8,]);
console.log(rollNo)

const addNo = (num1, num2) => (num1 + num2)

const total = addNo(5, 45);
console.log(total);