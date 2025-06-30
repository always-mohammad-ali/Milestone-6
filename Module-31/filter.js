const num = [45, 23, 64, 24, 94, 54, 55];

const getBigger = num.filter(n => n>70);
console.log(getBigger);

const findEven = num.filter(x => x%2 ===0);
console.log(findEven);

const friends = ['salim', 'dalim', 'mia', 'kala', 'salammm'];
const length = friends.filter(len => len.length> 4);
console.log(length);