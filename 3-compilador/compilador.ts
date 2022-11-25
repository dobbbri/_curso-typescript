// Links Úteis
// https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
// https://www.typescriptlang.org/docs/handbook/compiler-options.html

let canal: string = 'Gaveta'
let inscritos: number = 610234

// canal = inscritos
console.log(`Canal = ${canal}`)

// let nome = 'Pedro'

function soma(a: any, b: any) {
  return a + b
}

let qualquerCoisa
qualquerCoisa = 12
qualquerCoisa = 'abc'

function saudar(isManha: boolean): string {
  let saudacao: string = 'Tenha uma boa vida!'
  if (isManha) {
    saudacao = 'Bom Dia!'
  }
  return saudacao
}

console.log(saudar(true))
