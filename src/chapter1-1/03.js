// 编写一个程序，从命令行得到三个整数参数。如果它们都相等则打印 equal，否则打印 not equal
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let a;
let b;
let c;

rl.question('请输入a：', lineA => {
    a = lineA;
    rl.question('请输入b：', lineB => {
        b = lineB;

        rl.question('请输入c：', lineC => {
            c = lineC;
            if (a === b && a === c) {
                console.log('equal');
            } else {
                console.log('not equal');
            }
            rl.close();
        });
    });

});







// console.log(a)

