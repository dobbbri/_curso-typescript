"use strict";
// Links Úteis
// https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
// https://www.typescriptlang.org/docs/handbook/compiler-options.html
let canal = 'Gaveta';
let inscritos = 610234;
// canal = inscritos
console.log(`Canal = ${canal}`);
// let nome = 'Pedro'
function soma(a, b) {
    return a + b;
}
let qualquerCoisa;
qualquerCoisa = 12;
qualquerCoisa = 'abc';
function saudar(isManha) {
    let saudacao = 'Tenha uma boa vida!';
    if (isManha) {
        saudacao = 'Bom Dia!';
    }
    return saudacao;
}
console.log(saudar(true));
