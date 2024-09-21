let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let largura1 = +input();
let altura1 = +input();
let largura2 = +input();
let altura2 = +input();

if (largura1 * altura1 >= largura2 * altura2) {
    console.log(largura1 * altura1);
} else {
    console.log(largura2 * altura2);
}