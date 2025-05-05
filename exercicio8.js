// Importa o prompt-sync
const prompt = require('prompt-sync')();

// Pede o número ao usuário
let num1 = Number(prompt("Digite um numero: "));
let num2 = Number(prompt("Digite um numero: "));

if(num1 > num2){
    console.log(`${num2}  ${num1}`);
}else{
    console.log(`${num1}  ${num2}`);
}