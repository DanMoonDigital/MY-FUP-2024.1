let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let comando = input();
let num = +input();

if (comando == 'r') console.log(Math.round(num));
if (comando == 'c') console.log(Math.ceil(num));
if (comando == 'f') console.log(Math.floor(num));