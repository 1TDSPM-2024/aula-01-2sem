console.log("Bem vindo novamente!");
console.log("O console não é para os úsuarios, é para os programadores.")


//Declaração de array
let frutas = ["maçã", "banana", "laranja", "morango", "jambo"];

//lendo o array
console.log(frutas);
console.table(frutas);

//Ler um único item do array
console.log(frutas[0]);
console.log('--------------------')

//Lendo um array com loops for, for of e for in
for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
}

console.log('--------------------')

//for of
for (let fruta of frutas){
    console.log(fruta);
}

console.log('--------------------')

//for in
for (let indice in frutas){
    console.log(indice,'-', frutas[indice]);
}

console.log('--------------------')