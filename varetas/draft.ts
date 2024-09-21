let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let a = +input();
let b = +input();
let c = +input();

if (a + b > c && a + c > b && b + c > a){
    console.log("True");
}
else {
    console.log("False");
}
