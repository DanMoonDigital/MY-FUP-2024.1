let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let n1 = +input();
let n2 = +input();

let inteira = Math.floor(n1 / n2);
let resto = n1 % n2;

console.log(inteira);
console.log(resto);

let quebrada = (n1 / n2).toFixed(2);

console.log(quebrada);
