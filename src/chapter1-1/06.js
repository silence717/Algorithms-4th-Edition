let f = 0;
let g = 1;
let arr = [];

for(let i = 0; i <= 15; i++) {
    console.log(f);
    arr.push(f);
    f = f + g;
    g = f - g;
}
console.log(arr.join(','));
// 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610