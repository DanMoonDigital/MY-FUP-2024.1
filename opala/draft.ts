let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let vel = +input()
let min = +input()
let litros = +input()

let desenpenho = min / 60 * vel / litros;

console.log(desenpenho.toFixed(2));