let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let L = +input();
let R = +input();
let D = +input();

if (R > 50 && L < R && R > D) {
    console.log("S");
} else {
    console.log("N");
}