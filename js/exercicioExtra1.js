let vendedor = "";
let salario = 0;
let vendas = 0;
let comissao = 0;
let total = 0;

vendedor = prompt('Nome do vendedor:');
salario = parseFloat(prompt('Valor do salário:'));
vendas = parseFloat(prompt('Valor das vendas:'));

if (vendas > 5000) {
    comissao = vendas * 0.15;
} else if (vendas >= 1500) {
    comissao = vendas * 0.1;
} else {
    comissao = vendas * 0.05;
}

total = comissao + salario

alert(`Valor da comissao + salário: R$ ${total.toFixed(2)}`);