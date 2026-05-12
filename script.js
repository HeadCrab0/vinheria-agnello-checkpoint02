var nomeVelho = ""
var cadastros = 0
var velho = 1
var quantiaBaixa = 0
let nome = prompt('Digite seu nome, por favor:');
while (nome == "" || nome == null) {
    if (nome == "" || nome == null){
        alert('Erro! Nome inválido. Por favor, digite novamente.');
        nome = prompt('Digite seu nome');
    } else {
        break
    }
}
alert(`Bem-vindo ${nome}!`);
console.log(`Usuário cadastrado. Nome: ${nome}`);

alert('Iniciando cadastro de vinhos.');
console.log('Iniciando cadastro de vinhos:');

while (true){
let opcao = prompt('Você deseja cadastrar um vinho? (SIM ou NÃO)')
if (opcao == null){
    alert('Fim de cadastro')
    console.log('Usuário não cadastrou nenhum vinho.')
    break
} else {
    opcao = opcao.toLowerCase().trim()
}

if (opcao=="sim"){
cadastros += 1
var nomeVinho = prompt('Digite o nome do vinho:');
console.log(`-----------------`);
console.log(`Nome do vinho: ${nomeVinho}`);
let idade = parseInt(prompt('O ano que o vinho foi feito:'));
console.log(`Idade do vinho: ${2026 - idade}`);
let estoque = parseInt(prompt(`A quantidade armazenada no estoque: `));
console.log(`Quantidade armazenada: ${estoque}`);

if (idade > velho){
    velho = idade
    nomeVelho = nomeVinho
}
if (estoque < 5){
    console.log(`O vinho de nome: ${nomeVinho} tem um estoque baixo (${estoque}) <-------`)
    quantiaBaixa += 1
    var vinhoVelho = true
}

} else if (opcao=="nao" || opcao=="não"){
    alert('Você escolheu não continuar')
    if (cadastros == 0){
    console.log('Usuário não cadastrou nenhum vinho.')
    }
    var vinhoVelho = false
    break
} else {
    alert('Opção inválida. Digite SIM ou NÃO.')
}
}
if (cadastros > 0){
    console.log(`Número de cadastros realizados pelo usuário ${nome}: ${cadastros}`)
} else {
    console.log(`Fim do programa.`)
}
    console.log(`O vinho mais velho é o ${nomeVelho}, com ${2026 - velho} anos.`)
    
if (quantiaBaixa > 0){
    alert(`${quantiaBaixa} vinhos tem uma quantidade baixa em estoque! Confira no Console.`)
    console.log(`${quantiaBaixa} vinhos tem uma quantidade baixa em estoque. Confira acima.`)
} if (quantiaBaixa == 0){
    quantiaBaixa == 0
}
