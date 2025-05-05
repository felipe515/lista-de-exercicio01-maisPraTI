// Importa o prompt-sync
const prompt = require('prompt-sync')();

// Pede o número ao usuário
let qtd = Number(prompt("Digite a quantidade de maçãs que deseja comprar: "));

if(qtd < 12){
    let preco = qtd * 0.30;
    console.log(`O preço total é R$ ${preco}`);
}else{
    let preco = qtd * 0.25;
    console.log(`O preço total é R$ ${preco}`);
}