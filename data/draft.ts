let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let hora = + input();
let min = + input();
let dia = + input();
let mes = + input();
let ano = + input();
ano = ano % 100;

hora = String(hora).padStart(2, '0');
min = String(min).padStart(2, '0');
dia = String(dia).padStart(2, '0');
mes = String(mes).padStart(2, '0');
ano = String(ano).padStart(2, '0');

console.log(`${hora}:${min} ${dia}/${mes}/${ano}`)