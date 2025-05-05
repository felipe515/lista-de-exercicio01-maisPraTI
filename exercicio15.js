let a = 0;
let b = 1;

console.log("Os 10 primeiros números da sequência de Fibonacci:");

for (let i = 0; i < 10; i++) {
    console.log(a);
    let temp = a + b; 
    a = b;            
    b = temp;
}