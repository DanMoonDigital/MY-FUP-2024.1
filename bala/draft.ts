let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let x1 = +input();
let y1 = +input();
let x2 = +input();
let y2 = +input();

distanciaX = Math.abs(x1 - x2);
distanciaY = Math.abs(y1 - y2);

distanciatotal = Math.sqrt(distanciaX * distanciaX + distanciaY * distanciaY);

console.log(distanciatotal.toFixed(2));

