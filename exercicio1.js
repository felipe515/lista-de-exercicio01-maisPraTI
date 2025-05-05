// Importa o prompt-sync
const prompt = require('prompt-sync')();

// Pede o número ao usuário
let num = Number(prompt("Digite um número para saber se é par ou impar: "));

if (num % 2 == 0) {
    console.log(`${num} é par`);
}else{
    console.log(`${num} é impar`);
}
    
