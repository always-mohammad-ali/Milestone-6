function nums(a, b, c){
    const args = [...arguments]
    console.log(args)
    const total = a + b + c;
    return total;
}

const input = nums(2, 1, 4, 4, 5, 6, 2);
console.log(input);