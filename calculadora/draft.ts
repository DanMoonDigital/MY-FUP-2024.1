let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let num1 = +input();
let num2 = +input();
let operador = input();

if (operador == "+") console.log(num1 + num2);
if (operador == "-") console.log(num1 - num2);
if (operador == "*") console.log(num1 * num2);
if (operador == "/") console.log(Math.floor(num1 / num2));