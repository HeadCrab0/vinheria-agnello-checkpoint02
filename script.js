var nomeVelho = "";
var cadastros = 0;
var velho = 0; 
var quantiaBaixa = 0;
// ------------------ Separação
let nome = prompt('Digite seu nome, por favor:');
while (!nome || nome.trim() === "") {
    alert('Erro! Nome inválido. Por favor, digite novamente.');
    nome = prompt('Digite seu nome:');
}

alert(`Bem-vindo ${nome}!`);
console.log(`Usuário cadastrado. Nome: ${nome}`);
console.log('Iniciando cadastro de vinhos:');

// ---------------------------
while (true) {
let entrada = prompt('Você deseja cadastrar um vinho? (SIM ou NÃO)');
    
if (entrada === null) break; 
    
let opcao = entrada.toLowerCase().trim();

if (opcao === "sim") {
    cadastros++;
        
let nomeVinho = prompt('Digite o nome do vinho:');
let anoFeito = parseInt(prompt('O ano que o vinho foi feito:'));
        
        
    let idadeCalculada = 2026 - anoFeito; 
        
    let estoque = parseInt(prompt(`A quantidade armazenada no estoque: `));

console.log(`-----------------`);
console.log(`Vinho: ${nomeVinho}`);
console.log(`Idade: ${idadeCalculada} anos`);
console.log(`Estoque: ${estoque}`);


if (idadeCalculada > velho) {
        velho = idadeCalculada;
        nomeVelho = nomeVinho;
}

if (estoque < 5) {
    console.log(`ALERTA: Estoque baixo para ${nomeVinho} (${estoque}) <-------`);
    quantiaBaixa++;
    }

} else if (opcao === "nao" || opcao === "não") {
    alert('Finalizando inserção de dados...');
    break;
 } else {
    alert('Opção inválida. Digite SIM ou NÃO.');
}
}

console.log('RELATÓRIO FINAL');

if (cadastros > 0) {
    console.log(`Total de cadastros: ${cadastros}`);
    console.log(`O vinho mais velho é o ${nomeVelho}, com ${velho} anos.`);
    
    if (quantiaBaixa > 0) {
        console.log(`Atenção: ${quantiaBaixa} item(ns) com estoque crítico.`);
        alert(`${quantiaBaixa} vinhos têm estoque baixo! Verifique o console.`);
    } else {
        console.log(`Situação do estoque: OK.`);
    }
} else {
    console.log(`Nenhum vinho foi cadastrado.`);
}
console.log('==============================');
