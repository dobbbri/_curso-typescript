"use strict";
// string
const nome = 'Joao';
console.log(nome);
// number
let idade = 29;
idade = 29.6;
console.log(idade);
// boolean
let possuiHobbies = true;
possuiHobbies = false;
console.log(possuiHobbies);
// tipos explicitos
const minhaIdade = 27;
console.log(minhaIdade);
console.log(typeof minhaIdade);
// array
let hobbies = ['anime', 'cursos', 'series'];
console.log(hobbies);
console.log(typeof hobbies);
hobbies = [100, 200, 300];
console.log(hobbies);
console.log(typeof hobbies);
// tupla
let endereco = ['Rua Sao Jose', 88, ''];
console.log(endereco);
console.log(typeof endereco);
endereco = ['Avenida Dois', 45, 'Bloco A'];
// enuns
var Cor;
// enuns
(function (Cor) {
    Cor[Cor["Amarelo"] = 0] = "Amarelo";
    Cor[Cor["Azul"] = 1] = "Azul";
    Cor[Cor["Laranja"] = 2] = "Laranja";
    Cor[Cor["Preto"] = 100] = "Preto";
    Cor[Cor["Branco"] = 200] = "Branco";
})(Cor || (Cor = {}));
let minhaCor = Cor.Azul;
console.log(minhaCor);
console.log(typeof minhaCor);
minhaCor = Cor.Branco;
console.log(minhaCor);
// any
let carro = 'bmw';
console.log(carro);
console.log(typeof carro);
carro = { narca: 'BMW', ano: 2018 };
console.log(carro);
console.log(typeof carro);
// function
function digaOi() {
    console.log('Oiiii!');
}
digaOi();
function multiplica(numA, numB) {
    return numA * numB;
}
console.log(multiplica(7.4, 99));
// type function
let calculo;
calculo = multiplica;
console.log(calculo(50, 2.5));
// objects
let usuario = {
    nome: 'Sergio',
    idade: 54
};
console.log(usuario);
usuario = {
    nome: 'Luiz',
    idade: 54
};
console.log(usuario);
const funcionario = {
    supervisores: ['Ana', 'Paulo'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        return 'Ponto fora do horário';
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(11));
// union types
let nota = 10;
console.log(`minha nota é ${nota}`);
nota = '10';
console.log(`minha nota é ${nota}`);
// checando tipos
const valor = 30;
if (typeof valor === 'number') {
    console.log('é um number');
}
else {
    console.log(typeof valor);
}
// never
function falha(msg) {
    while (true) {
        throw new Error(msg);
    }
}
const produto = {
    nome: 'Sabão',
    preco: 4,
    validaProduto() {
        if (!this.nome || this.nome.trim().length === 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preço inválido');
        }
    }
};
produto.validaProduto();
// null
const altura = 12;
console.log(altura);
// altura = null
let alturaOpcional = 12;
alturaOpcional = null;
console.log(alturaOpcional);
const contato1 = {
    nome: 'Joao',
    tel1: '999999999',
    tel2: null
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
const contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
const correntista = {
    nome: 'Ana Silva',
    contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
