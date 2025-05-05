// Importa o prompt-sync
const prompt = require('prompt-sync')();

// Pede o número ao usuário
let num = Number(prompt("Digite uma idade para podermos ver a categoria: (criança, adolescente, adulto, idoso) : "));

if (num >= 0 && num <= 12) {
    console.log(`A categoria é criança`);
}else if(num >= 13 && num <= 17) {
    console.log(`A categoria é adolescente`);
}else if(num >= 18 && num <= 59) {
    console.log(`A categoria é adulto`);
}else{
    console.log(`A categoria é idoso`);
}
