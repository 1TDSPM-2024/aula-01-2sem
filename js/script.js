

//Lendo o array com console log e table:
console.log(frutas);
console.log("=============================================================");
console.table(frutas);
console.log("=============================================================");
//Ler um único item do array:
console.log(frutas[0]); //maçã

console.log("=============================================================");
//Lendo um array com loops for, for of e for in:
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
console.log("=============================================================");

//for of
for (let x of frutas) {
    console.log(x);
}
console.log("=============================================================");

//for in
for (let indice of frutas) {
    console.log(indice, frutas[indice]);
}
console.log("=============================================================");