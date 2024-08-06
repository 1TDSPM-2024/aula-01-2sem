
//Declaração de array de frutas
let frutas = ["maçã", "banana", "laranja", "morango", "jambo"];

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
for (let fruta of frutas) {
    console.log(fruta);
}

console.log("=============================================================");
//for in
for (let indice in frutas) {
    console.log(indice, frutas[indice]);
}
console.log("=============================================================");
//Adicionar um item no array:

//No final com PUSH().
frutas.push("abacaxi");
//No inicio com UNSHIFT()
frutas.unshift("melancia");


console.log("=============================================================");


//Função para remover um item do final do Array

document.getElementById("btnRemoveFinal").addEventListener("click", ()=>{

document.getElementById("btnRemoveFinal").addEventListener("click", () => {


    frutas.pop();
    addFrutas();
});

//Função para remover um item do início do Array

document.getElementById("btnRemoveInicio").addEventListener("click", ()=>{

document.getElementById("btnRemoveInicio").addEventListener("click", () => {


    frutas.shift();
    addFrutas();
});

//Colocando em ordem alfabética o array

document.getElementById("OrdemA").addEventListener("click", ()=>{

document.getElementById("OrdemA").addEventListener("click", () => {


    frutas.sort();
    addFrutas();
});

//Revertendo a ordem apresentada

document.getElementById("Revert").addEventListener("click", ()=>{

document.getElementById("Revert").addEventListener("click", () => {


    frutas.reverse();
    addFrutas();
});

//Sistema de busca no Array com indexOf

document.getElementById("btnPesquisa").addEventListener("click", ()=>{

document.getElementById("btnPesquisa").addEventListener("click", () => {


    pesquisaFruta(document.getElementById("idFruta").value);
    addFrutas();
});

//Sistema de remoção no Array com splice

document.getElementById("btnRemover").addEventListener("click", ()=>{

    let indiceDaFruta = pesquisaFruta(document.getElementById("idFruta").value);

    if(indiceDaFruta >= 0){
        frutas.splice(indiceDaFruta,1);
    }else{
        document.getElementById("itemFruta").innerHTML = "ITEM INEXISTENTE!";
    }

    addFrutas();
    
});



function pesquisaFruta(fruta){
    let valorPesquisado = frutas.indexOf(fruta);
    if(valorPesquisado >= 0){
        document.getElementById("itemFruta").innerHTML = frutas[valorPesquisado];
        return valorPesquisado;
    }else{

document.getElementById("btnRemover").addEventListener("click", () => {

    let indiceDaFruta = pesquisaFruta(document.getElementById("idFruta").value);

    if (indiceDaFruta >= 0) {
        frutas.splice(indiceDaFruta, 1);
    } else {
        document.getElementById("itemFruta").innerHTML = "ITEM INEXISTENTE!";
    }

});

function pesquisaFruta(fruta) {
    let valorPesquisado = frutas.indexOf(fruta);
    if (valorPesquisado >= 0) {
        document.getElementById("itemFruta").innerHTML = frutas[valorPesquisado];
        return valorPesquisado;
    } else {


        document.getElementById("itemFruta").innerHTML = "Fruta não encontrada!";
        return -1;
    }
}

//Criar uma função para adicionar o array a lista de frutas no HTML.
function addFrutas() {
    let listaFrutas = document.getElementById("lista-frutas");
    // let listaFrutas = document.querySelector("#lista-frutas");
    listaFrutas.innerHTML = "";
    for (let fruta of frutas) {
        let item = document.createElement("li");
        item.textContent = fruta;
        listaFrutas.appendChild(item);
    }
}

//Chamando a função addFrutas() através do botão AddFrutas
document.getElementById("btnAddFrutas").addEventListener("click", addFrutas);