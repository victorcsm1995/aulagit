console.log("Rodando arquivo de games");
console.log("tudo ta rodando");
console.log("Mudança do Homem");
console.log("Atualizando com codigo local");
console.log("Teste do git pelo cmd");
console.log("Fazendo commit pelo cmd");

// let numeroUm = 1;
// let stringUm = '1';
// let numeroTrinta = 30;
// let stringTrinta = '30';
// let numeroDez = 10;
// let stringDez = '10';

// if(numeroUm == stringUm){
//     console.log("As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes");
// }
// else{
//     console.log("As variáveis numeroUm e stringUm não tem o mesmo valor");
// }

// if(numeroTrinta === stringTrinta){
//     console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
// }
// else {
//     console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
// };

// if(numeroDez == stringDez){
//     console.log("As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes");
// }
// else{
//     console.log("As variáveis numeroDez e stringDez não tem o mesmo valor");
// };
let nome = prompt("Informe seu nome: "), idade = prompt("Informe sua idade: "), linguagem = prompt("Informe sua linguagem preferida: ");

console.log(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!`);

let variavel = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);

if(variavel == 1){
    console.log("Muito bom! Continue estudando e você terá muito sucesso.")
}
else if(variavel == 2){
    console.log("Ahh que pena... Já tentou aprender outras linguagens?")
}
else{
    console.log("Erro ao informar a resposta, reinicie a página.")
}