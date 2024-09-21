let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let p = + input ();
let dedo1 = + input();
let dedo2 = + input();
 
let x = dedo1 + dedo2;


if (x % 2 == 0){
    if (p == 0) {
        console.log(0);
    } else { 
        console.log(1);
} 
} else
if (p == 1) {
    console.log(0);
} else { 
    console.log(1);
}


