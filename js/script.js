let frutas = ["maçã", "banana", "laranja", "morango", "jabuticaba"]

// exibindo no console
console.log(frutas)
console.table(frutas)

console.log("=======================")

// for padrão
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}

console.log("=======================")

// for of   -   usar como for each
for (let fruta of frutas) {
    console.log(fruta)
}

console.log("=======================")

// for in   -   usar como enumerate
for (let indice in frutas) {
    console.log(indice, frutas[indice])
}
