console.log('Hello world');

let nome = 'Leandro';

console.log(nome);

let idade = 28;
let altura = 1.73;

console.log('Nome: ' + nome + ' - Altura: ' + altura + ' - Idade: ' + idade + ' anos.');
console.log(`Nome: ${nome} - Idade: ${idade} anos`);

let trabalha = true;

console.log(trabalha);
console.log('Trabalha: ' + (trabalha === true ? 'Sim' : 'Não'));

if (trabalha === true) {
    console.log('Trabalha: Sim');
}

else{
    console.log('Trabalha:Não');
}

const sangue = 'A+';

console.log(
    'vNome: ' + typeof(nome) + '\n' +
    'vIdade: ' + typeof(idade) + '\n' +
    'vAltura: ' + typeof(altura) + '\n' +
    'vTrabalha: ' + typeof(trabalha) + '\n' +
    'vConstante: ' + typeof(sangue) + '\n' 
);

let endereco = {
    'rua' : 'Brasil',
    'num' : '108',
    'bairro' : 'Centro',
    'cidade' : 'Tupã',
    'uf' : 'SP',
    'mora' : true
}

console.log(endereco);
console.log(typeof(endereco));

let frutas = ['banana' , 'mamão' , 'maçã'];
console.log(frutas);

let velha = [

    [0, 1, 2]
    [3, 4, 5]
    [6, 7, 8]
]