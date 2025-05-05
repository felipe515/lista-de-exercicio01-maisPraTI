// Importa o prompt-sync
const prompt = require('prompt-sync')();

// Pede o número ao usuário
let num = Number(prompt("Digite um numero: "));

// Inicializa a variável fatorial
let fatorial = 1;
for(let i = 1; i <= num; i++){
    fatorial = fatorial * i;
}
console.log(`O fatorial de ${num} é: ${fatorial}`);