// Importa o prompt-sync
const prompt = require('prompt-sync')();

// Pede o número ao usuário
let somaTotal = 0;
for(let i = 0; i < 5; i++){
    let num = Number(prompt("Digite um numero: "));
    somaTotal = somaTotal + num;
}

console.log(`A soma dos números é: ${somaTotal}`);