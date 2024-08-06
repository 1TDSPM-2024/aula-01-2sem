//Declaração de Array
let frutas = ["maçã", "banana", "laranja", "morango", "jambo"];

//Lendo o Array
console.log(frutas);
console.log("=====================================================");
console.table(frutas);
console.log("=====================================================");
//Lendo um único item do Array
console.log(frutas[0]);
console.log("=====================================================");
//Lendo um array com loops for, for of e for in:
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}
console.log("=====================================================");
//for of
for (let fruta of frutas) {
    console.log(fruta);
}
console.log("=====================================================");
//for in
for (let indice in frutas) {
    console.log(indice, frutas[indice]);
}
console.log("=====================================================");
//adicionando um item ao array
//No final com push:
frutas.push("abacaxi");
frutas.push("caqui");

//No inicio com UNSHIFT:
frutas.unshift("melancia");

//função para remover do final do array
document.getElementById("btnRemoveFinal").addEventListener("click", ()=>{
    frutas.pop();
    addFrutas();
})

//função para remover do inicio do array
document.getElementById("btnRemoveInicio").addEventListener("click", ()=>{
    frutas.shift();
    addFrutas();
})

//Colocando em ordem alfabética o array
document.getElementById("btnOrdemA").addEventListener("click", ()=>{
    frutas.sort();
    addFrutas();
})
//Colocando em ordem reversa
document.getElementById("btnReverseOrder").addEventListener("click", ()=>{
    frutas.reverse();
    addFrutas();
})

//Sistema de Busca no Array com indexOf
document.getElementById("btnPesquisa").addEventListener("click", ()=>{
    pesquisaFruta(document.getElementById("idFruta").value);
    addFrutas();
})

//Sistema de Remoção no array com Splice
document.getElementById("btnRemover").addEventListener("click", ()=>{
    let indiceDaFruta = pesquisaFruta(document.getElementById("idFruta").value);
    if (indiceDaFruta >= 0) {
        frutas.splice(indiceDaFruta,1);
    }else{
        document.getElementById("itemFruta").innerHTML = "Item Inexistente!";
    }

    addFrutas();
})

function pesquisaFruta(fruta) {
    let valorPesquisado = frutas.indexOf(fruta);
    if(valorPesquisado >= 0) {
        document.getElementById("itemFruta").innerHTML = frutas[valorPesquisado];
        return valorPesquisado;
    }else{
        document.getElementById("itemFruta").innerHTML = "Fruta não Encontrada!";
        return -1;
    }

}


//Criar uma função para adicionar o array a lista de frutas no HTML.
function addFrutas(){
    let listaFrutas = document.getElementById("lista-frutas");
    //let Lista = document.querySelector ("#lista-frutas");
    listaFrutas.innerHTML = "";
    for (let fruta of frutas) {
        let item = document.createElement ("li");
        item.textContent = fruta;
        listaFrutas.appendChild(item);
    }
}

//Chamando a função addFrutas() através do botão AddFrutas
document.getElementById("btnAddFrutas").addEventListener("click", addFrutas);

