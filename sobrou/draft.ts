let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let qtd1 = +input();
let qtd2 = +input();
let qtd3 = +input();

let preço1 = +input();
let preço2 = +input();
let preço3 = +input();

let qtdDin = +input();
let gastoTotal = ((qtd1*preço1)+ (qtd2*preço2)+ (qtd3*preço3));

console.log((qtdDin-gastoTotal).toFixed(2))
