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

//adicionando um item ao array

//No final com PUSH().
frutas.push("abacaxi");
//No inicio com unshift
frutas.unshift("melancia")


console.log("===================================")




//Função para remover um item no final do array
document.getElementById("btnRemoveFinal").addEventListener("click", ()=>{
    frutas.pop();
    addFrutas();
});

//Função para remover um item do inicio do array
document.getElementById("btnRemoveInicio").addEventListener("click", ()=>{
    frutas.shift();
    addFrutas();
});

//Colocando o array em ordem alfabetica
document.getElementById("OrdemA").addEventListener("click", ()=>{
    frutas.sort();
    addFrutas();
});

//Reverção a ordem apresentada
document.getElementById("Revert").addEventListener("click", ()=>{
    frutas.reverse();
    addFrutas();
});

//sistema de busca no array com indexOF
document.getElementById("btnPesquisa").addEventListener("click",()=>{
    let valorPesquisado = frutas.indexOf(document.getElementById("idFruta").value);
    pesquisaFruta(document.getElementById("idFruta").value);
    addFrutas();



//sistema de remoção no array com splice
document.getElementById("btnRemover").addEventListener("click", ()=>{

    let indiceDaFruta = pesquisaFruta(document.getElementById("idFruta").value)

    if(indiceDaFruta>=0){
        frutas.splice(indiceDaFruta,1) 
    }
    else{
        document.getElementById("itemFruta").innerHTML = "Item Inexistente";
    }
    addFrutas();
})




function pesquisaFruta(fruta){
    let valorPesquisado = frutas.indexOf(fruta)
    if(valorPesquisado >= 0 ){
        document.getElementById("itemFruta").innerHTML = frutas[valorPesquisado];
    }
    else{
    frutas.indexOf(document.getElementById("itemFruta").innerHTML = "Fruta não encontrada");
    }
    return -1;
}});





//criando uma função para adicionar o array a lista de frutas no HTML.
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

//chamando a função addFrutas() atraves do botão AddFrutas
document.getElementById("btnAddFrutas").addEventListener("click", addFrutas);

