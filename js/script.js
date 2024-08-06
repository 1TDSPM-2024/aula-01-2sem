console.log("Bem Vindo Novamente!")

//Declaração de array
let frutas = ["maçã", "laranja", "morango", "pera", "jabuticaba"];

console.log("-------------------------------------------------")

//lendo o array
console.log(frutas)
console.table(frutas)

console.log("-------------------------------------------------")

//ler um unico item do array
console.log(frutas[4])

console.log("-------------------------------------------------")

//lendo um array com loops for, for of e for in

for (let i = 0; i < frutas.length; i++){
    console.log(frutas[i]);
    }

console.log("-------------------------------------------------")

//for of 

for (let fruta of frutas) {
    console.log(fruta);
}

console.log("-------------------------------------------------")

// for in

for (let indice in frutas){
    console.log(indice, frutas[indice]);
}