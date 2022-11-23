// string
const nome: string = 'Joao'
console.log(nome)

// number
let idade: number = 29
idade = 29.6
console.log(idade)

// boolean
let possuiHobbies: boolean = true
possuiHobbies = false
console.log(possuiHobbies)

// tipos explicitos
const minhaIdade: number = 27
console.log(minhaIdade)
console.log(typeof minhaIdade)

// array
let hobbies: any[] = ['anime', 'cursos', 'series']
console.log(hobbies)
console.log(typeof hobbies)
hobbies = [100, 200, 300]
console.log(hobbies)
console.log(typeof hobbies)

// tupla
let endereco: [string, number, string] = ['Rua Sao Jose', 88, '']
console.log(endereco)
console.log(typeof endereco)
endereco = ['Avenida Dois', 45, 'Bloco A']

// enuns

enum Cor {
  Amarelo,
  Azul,
  Laranja,
  Preto = 100,
  Branco = 200,
}

let minhaCor: Cor = Cor.Azul
console.log(minhaCor)
console.log(typeof minhaCor)
minhaCor = Cor.Branco
console.log(minhaCor)

// any
let carro: any = 'bmw'
console.log(carro)
console.log(typeof carro)
carro = { narca: 'BMW', ano: 2018 }
console.log(carro)
console.log(typeof carro)

// function
function digaOi (): void {
  console.log('Oiiii!')
}
digaOi()

function multiplica (numA: number, numB: number): number {
  return numA * numB
}
console.log(multiplica(7.4, 99))

// type function
let calculo: (x: number, y: number) => number
calculo = multiplica
console.log(calculo(50, 2.5))

// objects
let usuario: { nome: string, idade: number } = {
  nome: 'Sergio',
  idade: 54
}
console.log(usuario)

usuario = {
  nome: 'Luiz',
  idade: 54
}
console.log(usuario)

// Alias
interface Funcionario {
  supervisores: string[]
  baterPonto: (horario: number) => string
}

const funcionario: Funcionario = {
  supervisores: ['Ana', 'Paulo'],
  baterPonto (horario: number) {
    if (horario <= 8) {
      return 'Ponto normal'
    }
    return 'Ponto fora do horário'
  }
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(11))

// union types
let nota: number | string = 10
console.log(`minha nota é ${nota}`)
nota = '10'
console.log(`minha nota é ${nota}`)

// checando tipos
const valor = 30
if (typeof valor === 'number') {
  console.log('é um number')
} else {
  console.log(typeof valor)
}

// never
function falha (msg: string): never {
  while (true) {
    throw new Error(msg)
  }
}

const produto = {
  nome: 'Sabão',
  preco: 4,
  validaProduto () {
    if (!this.nome || this.nome.trim().length === 0) {
      falha('Precisa ter um nome')
    }
    if (this.preco <= 0) {
      falha('Preço inválido')
    }
  }
}

produto.validaProduto()

// null
const altura: any = 12
console.log(altura)

// altura = null

let alturaOpcional: null | number = 12
alturaOpcional = null
console.log(alturaOpcional)

interface Contato {
  nome: string
  tel1: string
  tel2: string | null
}

const contato1: Contato = {
  nome: 'Joao',
  tel1: '999999999',
  tel2: null
}

console.log(contato1.nome)
console.log(contato1.tel1)
console.log(contato1.tel2)

// Desafio
interface ContaBancaria {
  saldo: number
  depositar: (valor: number) => void
}

const contaBancaria: ContaBancaria = {
  saldo: 3456,
  depositar (valor: number) {
    this.saldo += valor
  }
}

interface Correntista {
  nome: string
  contaBancaria: ContaBancaria
  contatos: string[]
}

const correntista: Correntista = {
  nome: 'Ana Silva',
  contaBancaria,
  contatos: ['34567890', '98765432']
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)
