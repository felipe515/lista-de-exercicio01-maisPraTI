// Importa o prompt-sync
const prompt = require('prompt-sync')();
// Pede o número ao usuário
let num = Number(prompt("Digite um numero: "));

for(let i = 1; i <= 10; i++){
    console.log(`${num} x ${i} = ${num * i}`);
}