// Importa o prompt-sync
const prompt = require('prompt-sync')();

// Pede o número ao usuário
let num;
do{
    console.log("1 - verificar nota:")
    console.log("2 - verificar idade:");
    console.log("3 - verificar par ou impar:");
    console.log("4 - sair");
    num = Number(prompt("Digite o número da opção desejada: "));
    switch(num){
        case 1:
            let nota = Number(prompt("Digite uma nota de 0 a 10: "));
            if(nota <= 10 && nota >= 7){
                console.log(`Aprovado`)
            }else if(nota >= 5 && nota < 7){
                console.log(`Recuperação`)
            }else if(nota < 5 && nota >= 0){
                console.log(`Reprovado`)
            }
        break;
        case 2:
            let idade = Number(prompt("Digite uma idade para podermos ver a categoria: (criança, adolescente, adulto, idoso) : "));
            if (idade >= 0 && idade <= 12) {
                console.log(`A categoria é criança`);
            }else if(idade >= 13 && idade <= 17) {
                console.log(`A categoria é adolescente`);
            }else if(idade >= 18 && idade <= 59) {
                console.log(`A categoria é adulto`);
            }else{
                console.log(`A categoria é idoso`);
            }
        break;
        case 3:
            let n = Number(prompt("Digite um número para saber se é par ou impar: "));
            if (n % 2 == 0) {
                console.log(`${n} é par`);
            }else{
                console.log(`${n} é impar`);
            }
        break;
        case 4:
            console.log("Saindo...");
        break;
        default:
            console.log("Opção inválida! Tente novamente.");
    }
    
}while(num < 4);

