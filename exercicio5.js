// Importa o prompt-sync
const prompt = require('prompt-sync')();

// Pede o número ao usuário
console.log("Vamos calcular seu IMC")
let peso = Number(prompt("Digite seu peso: "));
let altura = Number(prompt("digite sua altura: "));

let imc = peso / (altura * altura);

if(imc < 18.5){
    console.log(`Abaixo do peso`);
}else if(imc >= 18.6 && imc <= 24.9){
    console.log(`Peso normal`);
}else if(imc >= 25 && imc <= 29.9){
    console.log(`sobrepeso`)
}else{
    console.log(`obesidade`)
}