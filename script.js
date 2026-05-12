
var nomeVelho = "";
var cadastros = 0;
var velho = 0; 
var quantiaBaixa = 0;

let nome = prompt('Digite seu nome, por favor:');

while (nome == "" || nome == null) {
    alert('Erro! Nome inválido. Por favor, digite novamente.');
    nome = prompt('Digite seu nome');
}

alert(`Bem-vindo ${nome}!`);
console.log(`Usuário cadastrado. Nome: ${nome}`);

alert('Iniciando cadastro de vinhos.');
console.log('Iniciando cadastro de vinhos:');

while (true) {
let opcao = prompt('Você deseja cadastrar um vinho? (SIM ou NÃO)');
    
if (opcao == null) {
alert('Fim de cadastro');
break;
} else {
opcao = opcao.toLowerCase().trim();
}
if (opcao == "sim") {
cadastros += 1;
var nomeVinho = prompt('Digite o nome do vinho:');

let anoFeito = parseInt(prompt('O ano que o vinho foi feito:'));
let idadeCalculada = 2026 - anoFeito; 

let estoque = parseInt(prompt(`A quantidade armazenada no estoque: `));

console.log(`-----------------`);
console.log(`Nome do vinho: ${nomeVinho}`);
console.log(`Idade do vinho: ${idadeCalculada} anos`);
console.log(`Quantidade armazenada: ${estoque}`);

      
if (idadeCalculada > velho) {
    velho = idadeCalculada;
    nomeVelho = nomeVinho;
}

if (estoque < 5) {
        console.log(`O vinho de nome: ${nomeVinho} tem um estoque baixo (${estoque}) <-------`);
        quantiaBaixa += 1;
}

} else if (opcao == "nao" || opcao == "não") {
    alert('Você escolheu não continuar');
    break;
} else {
alert('Opção inválida. Digite SIM ou NÃO.');
}
}
console.log('>Relatório Final<');

if (cadastros > 0) {
    console.log(`Número de cadastros realizados pelo usuário ${nome}: ${cadastros}`);
    console.log(`O vinho mais velho é o ${nomeVelho}, com ${velho} anos.`);
    
 if (quantiaBaixa > 0) {
    alert(`${quantiaBaixa} vinhos têm uma quantidade baixa em estoque! Confira no Console.`);
    console.log(`${quantiaBaixa} vinhos têm uma quantidade baixa em estoque.`);
 } else {
console.log(`Todos os vinhos estão com estoque em dia.`);
}
} else {
    console.log(`Nenhum vinho foi cadastrado. Fim do programa.`);
}
