const nums = [45, 20, 10];

const sum = nums.reduce((previous, current) => previous + current, 0);
console.log(sum);

const mul = nums.reduce((p, c)=> p*c , 1);
console.log(mul);