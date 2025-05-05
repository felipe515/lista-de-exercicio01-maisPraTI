// Importa o prompt-sync
const prompt = require('prompt-sync')();
// Pede o número ao usuário
let soma = 0;
let cont = 0;
let num;
do{
    num = Number(prompt("Digite um numero: "));
    soma = soma + num;
    cont++;
}while(num != 0);
let media = soma / (cont-1);
console.log(`A média dos números é: ${media}`);