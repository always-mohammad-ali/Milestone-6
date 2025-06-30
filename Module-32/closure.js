function stopwatch(){
    let count = 0;
    return function(){
        count ++;
        return count;
    }
}

let result = stopwatch();
console.log(result());
console.log(result())