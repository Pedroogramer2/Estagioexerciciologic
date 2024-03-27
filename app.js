
function isFibonacci(num) {
    let a = 0;
    let b = 1;
    while (a < num) {
        let temp = a;
        a = b;
        b = temp + b;
    }
    return a === num;
}

let numero = 2;

if (isFibonacci(numero)) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
} else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
}
