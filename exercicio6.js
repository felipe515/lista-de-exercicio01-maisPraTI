// Importa o prompt-sync
const prompt = require('prompt-sync')();

// Pede o número ao usuário
let a = Number(prompt("Digite lado a: "));
let b = Number(prompt("Digite lado b: "));
let c = Number(prompt("Digite lado c: "));

if(a + b > c && a + c > b && b + c > a){
    console.log(`Os lados formam um triângulo`);
    if(a == b && a == c){
        console.log(`Os lados formam um triângulo equilátero`);
    }else if(a == b || a == c || b == c){
        console.log(`Os lados formam um triângulo isósceles`);
    }else if(a != b && a != c && b != c){
        console.log(`Os lados formam um triângulo escaleno`);
    }
}else{
    console.log(`Os lados não formam um triângulo`);	
}