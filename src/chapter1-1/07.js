let sum = 0;
function b() {
    for(let i = 1; i < 1000; i++) {
        for(let j = 0; j < i; j++) {
            sum++;
        }
    }
}
b();
console.log(sum); 
// 499500

let sum1 = 0;
function c() {
    for(let i = 1; i < 1000; i = i * 2) {
        for(let j = 0; j < 1000; j++) {
            sum1++;
        }
    }
}
c();
console.log(sum1); 
// 10000