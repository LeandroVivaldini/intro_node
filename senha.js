let entrada = require('prompt-sync')();
const senha = '123456';
let cont = 0;
for (let cont = 1; cont <= 3; cont++) {
    let senhaDig = entrada('Digite a senha para acessar o sistema: ');
    if (senhaDig === senha) {
        console.log('Acesso autorizado.');
        break
    } else {
        console.log('Acesso não autorizado.');
    }
}