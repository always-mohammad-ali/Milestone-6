let num1 = 5;
let num2 = 7;

function multiply(a, b){
    a = 10;
    let result = a * b;
    return result;
}

console.log(num1);
let input = multiply(num1, num2);
console.log(input);

let student1 = {name:'kala chan', age:65};
let student2 = {name:'dola chan', age:99};

function stu(s1, s2){
    s1.name = 'salman khan';
    s2.age = 5;
}

console.log(student1, student2)
 stu(student1, student2);
console.log(student1, student2)
