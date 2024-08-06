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

//Adicionar um item no array(push -> add no final)
frutas.push("abacaxi");

//No inicio com UNSHIFT() -> add no começo
frutas.unshift("melancia")

console.log('--------------------')

//Função para remover um item do final do Array
document.getElementById("btnRemoveFinal").addEventListener("click", ()=>{
    frutas.pop();
    addFrutas();
});

console.log('--------------------')

//Função para remover um item do início do Array
document.getElementById("btnRemoveInicio").addEventListener("click", ()=>{
    frutas.shift();
    addFrutas();
});

//Colocando em ordem alfabética o array
document.getElementById("OrdemA").addEventListener("click", ()=>{
    frutas.sort();
    addFrutas();
});

//Revertendo a ordem apresentada
document.getElementById("Revert").addEventListener("click", ()=>{
    frutas.reverse();
    addFrutas();
});

//Sistema de busca no Array com indexOf
document.getElementById("btnPesquisa").addEventListener("click", ()=>{
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
    let valorPesquisado = frutas.indexOf(document.getElementById("idFruta").value);
    if(valorPesquisado >= 0){
        document.getElementById("itemFruta").innerHTML = frutas[valorPesquisado];
        return valorPesquisado;
    }else{
        document.getElementById("itemFruta").innerHTML = "Fruta não encontrada!";
        return -1;
    }
}



//Criar função para adicionar o array a lista de frutas no HTML
function addFrutas(){
    let listaFrutas = document.getElementById("lista-frutas");
    listaFrutas.innerHTML = "";
    for (let fruta of frutas){
        let item = document.createElement("li");
        item.textContent = fruta;
        listaFrutas.appendChild(item);
    }
}

//Chamando a função addFrutas() através do botão AddFrutas
document.getElementById("btnAddFrutas").addEventListener("click", addFrutas);
//Basicamente fizemos a lista aparecer na tela, apertando o botão, colocando toda a lista ali.
