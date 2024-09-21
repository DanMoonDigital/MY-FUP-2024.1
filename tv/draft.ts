let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let preco = +input();
let quantidadeDeParcelas = +input();

let precoComJuros = preco * (1 + (quantidadeDeParcelas - 1) * 0.05);
let parcela = precoComJuros / quantidadeDeParcelas;

console.log(`${parcela.toFixed(2)}\n${precoComJuros.toFixed(2)}`);