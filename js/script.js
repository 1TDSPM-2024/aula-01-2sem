let frutas = ["maçã", "banana", "laranja", "morango", "jabuticaba"];

// exibindo no console
console.log(frutas);
console.table(frutas);

console.log("=======================");

// for padrão
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

console.log("=======================");

// for of   -   usar como for each
for (let fruta of frutas) {
    console.log(fruta);
}

console.log("=======================");

// for in   -   usar como enumerate
for (let indice in frutas) {
    console.log(indice, frutas[indice]);
}

console.log("=======================");

// adicionando item no fim
frutas.push("abacaxi");
// adicionando item no início
frutas.unshift("melão");

console.log("=======================");

// adicionando itens no HTML
function adicionarFrutas() {
    let listaFrutas = document.getElementById("lista-frutas");
    listaFrutas.innerHTML = ""
    for (let fruta of frutas) {
        let item = document.createElement("li");
        item.textContent = fruta;
        listaFrutas.appendChild(item);
    }
}
// botão para a função
let botaoAdicionarFrutas = document.getElementById("btn-adicionar-frutas");
botaoAdicionarFrutas.addEventListener("click", adicionarFrutas);

console.log("=======================");

// botão que remove o último item
let botaoRemoverUltima = document.getElementById("btn-remover-ultima");
botaoRemoverUltima.addEventListener("click", () => {
    frutas.pop();
    adicionarFrutas();
});

// botão remover primeiro item
let botaoRemoverPrimeira = document.getElementById("btn-remover-primeira");
botaoRemoverPrimeira.addEventListener("click", () => {
    frutas.shift();
    adicionarFrutas();
})

// botão ordem alfabética
let botaoOrdemAlfabetica = document.getElementById("btn-ordem-alfabetica");
botaoOrdemAlfabetica.addEventListener("click", () => {
    frutas.sort();
    adicionarFrutas();
})

// botão ordem reversa
let botaoOrdemReversa = document.getElementById("btn-ordem-reversa");
botaoOrdemReversa.addEventListener("click", () => {
    frutas.reverse();
    adicionarFrutas();
})

console.log("=======================");
