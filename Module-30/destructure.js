const obj = {
    name:'aliim',

    age:45,

    money:5433, 

    nationality:'bd', 


}

const nam = obj.name;
console.log(nam);

const ag = obj.age;
console.log(ag);

const {name} = obj;
console.log(name);

const {nationality, money} = obj;
console.log(nationality);
console.log(money);

const numb = [4555, 344, 55000, 3];
const [x, y, z, m]= numb;
console.log(x);
console.log(y);
console.log(z);
console.log(m);

function doubleThem(num1, num2){
    return[num1*2, num2*2];
}

const [first, second] = doubleThem(500, 500);
console.log(first);
console.log(second);

const profile = {
    namee: 'alias',
    age: 45,
    prof:'stu'
}

const {namee:n , age:a, prof:p} = profile;
console.log(n);
console.log(a);
console.log(p);