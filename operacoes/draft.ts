let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let a = +input();
let b = +input();
let soma = (a + b);
let subtração = (a - b);
let multiplicação = (a * b);
let divisão = (a / b);
let resto = a % b;

console.log(soma);
console.log(subtração);
console.log(multiplicação);
console.log(divisão.toFixed(2));
console.log(resto);