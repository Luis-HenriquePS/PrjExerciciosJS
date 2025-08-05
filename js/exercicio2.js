let numeroUm, numeroDois = 0;

numeroUm = prompt("Digite um valor:");
numeroDois = prompt("Digite um valor:");

if (numeroUm === numeroDois) {
    alert('São iguais');
} else if (numeroUm > numeroDois) {
    alert('O primeiro número é maior que o segundo número.');
} else {
    alert('O segundo número é maior que o primeiro número.');
}