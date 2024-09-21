let _cin_ : string[] = [];
try { _cin_ = require("fs").readFileSync(0).toString().split(/\r?\n/); } catch(e){}
let input = () : string => _cin_.length === 0 ? "" : _cin_.shift()!;
let write = (text: any, end:string="\n")=> process.stdout.write("" + text + end);
export {};

let inicio =  + input ();
let fim = + input ();

function solucao(inicio, x) {
    // seu código aqui
        return inicio % x == 0; {
            console.log(solucao (10,2))
            if (inicio == 0) {
              console.log("true");
            } else {
                console.log("false");
            }
        } 
    }