let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let num = +input();

if (num > 0) {
  console.log("+");
} else if (num < 0) {
  console.log("-");
} else {
  console.log("0");
}