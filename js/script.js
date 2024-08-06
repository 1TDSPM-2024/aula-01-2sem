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
function exibirListaFrutas() {
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
botaoAdicionarFrutas.addEventListener("click", exibirListaFrutas);

console.log("=======================");

// botão que remove o último item
let botaoRemoverUltima = document.getElementById("btn-remover-ultima");
botaoRemoverUltima.addEventListener("click", () => {
    frutas.pop();
    exibirListaFrutas();
});

// botão remover primeiro item
let botaoRemoverPrimeira = document.getElementById("btn-remover-primeira");
botaoRemoverPrimeira.addEventListener("click", () => {
    frutas.shift();
    exibirListaFrutas();
})

// botão ordem alfabética
let botaoOrdemAlfabetica = document.getElementById("btn-ordem-alfabetica");
botaoOrdemAlfabetica.addEventListener("click", () => {
    frutas.sort();
    exibirListaFrutas();
})

// botão ordem reversa
let botaoOrdemReversa = document.getElementById("btn-ordem-reversa");
botaoOrdemReversa.addEventListener("click", () => {
    frutas.reverse();
    exibirListaFrutas();
})

console.log("=======================");

// sistema de busca com indexOf
function pesquisarFruta(fruta) {
    let valorPesquisado = frutas.indexOf(fruta);
    if (valorPesquisado >= 0) {
        document.getElementById("itemFruta").innerHTML = frutas[valorPesquisado];
        return valorPesquisado;
    } else {
        document.getElementById("itemFruta").innerHTML = "Fruta não encontrada.";
        return -1;
    }
}

let botaoPesquisa = document.getElementById("btn-pesquisa");
botaoPesquisa.addEventListener("click", () => {
    pesquisarFruta(document.getElementById("idFruta").value);
    exibirListaFrutas();
})

console.log("=======================");

// sistema de remoção com splice
function removerFruta() {
    let indiceDaFruta = pesquisarFruta(document.getElementById("idFruta").value);

    if (indiceDaFruta >= 0) {
        frutas.splice(indiceDaFruta, 1);
    } else {
        document.getElementById("itemFruta").innerHTML = "ITEM INEXISTENTE!";
    }
}

let botaoRemover = document.getElementById("btn-remover");
botaoRemover.addEventListener("click", () => {
    removerFruta();
    exibirListaFrutas();
});