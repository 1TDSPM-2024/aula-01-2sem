console.log("Bem vindo Novamente");

//Declaração de array de frutas
let frutas = ["maçã", "banana", "laranja", "morango", "jambo"];

//lendo o array com console log e table
console.log(frutas);
console.log("===================================")
console.table(frutas);

console.log("===================================")
//ler um único item do array
console.log(frutas[0]); //maçã
console.log("===================================")

//lendo um array com loops for, for of e for in:
for (let i=0; i<frutas.length; i++){
    console.log(frutas[i]);
}
    console.log("===================================")
//for of
for (let fruta of frutas){
    console.log(fruta);
}
console.log("===================================")

//for in
for(let indice in frutas){
    console.log(indice, frutas[indice]);
}
console.log("===================================")