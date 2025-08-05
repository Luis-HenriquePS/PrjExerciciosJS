let nomeFuncionario = "";
let vendas = 0;
let comissao = 0;

nomeFuncionario = prompt("Nome do funcionário: ");
vendas = prompt("Valor das vendas:");

comissao = vendas * 0.1;

alert(`A comissão do funcionário ${nomeFuncionario} é de: R$ ${comissao.toFixed(2)}`);