let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let inicio: number = +input();
let fim: number = +input();

  let total: number;
  for (let i = inicio; i <= fim; i+=1) {
    if (i% 2 == 0 && i % 3 == 0) {
      total = total + i;
    }
  } 
  write(total);