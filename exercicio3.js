// Importa o prompt-sync
const prompt = require('prompt-sync')();

// Pede o número ao usuário
let num = Number(prompt("Digite uma nota de 0 a 10: "));

if(num <= 10 && num >= 7){
    console.log(`Aprovado`)
}else if(num >= 5 && num < 7){
    console.log(`Recuperação`)
}else if(num < 5 && num >= 0){
    console.log(`Reprovado`)
}