

//declaração de array de frutas
    let frutas = ["maça", "banana", "laranja", "morango","jambo"];

//lendo o array com console log e table:
console.log(frutas);
console.table(frutas);

//ler um unico item de array:
console.log(frutas[0]);//maçã

//lendo um array com loops for,for of e for in:
for(let i = 0; i <frutas.length;i++){
    console.log(frutas[i]);
}

//for of
for (let frutas of frutas) {
    console.log(x);
}

//for in
for (let indice in frutas) {
    console.log(indice, frutas[indice]);
        }
    console.log("=============================================================");
    //Adicionar um item no array:

//No final com PUSH().
frutas.push("abacaxi");

//Criar uma função para adicionar o array a lista 
//Adicionar um item no array:

//No final com PUSH().
frutas.push("abacaxi");
//No inicio com UNSHIFT()
frutas.unshift("melancia");


console.log("=============================================================");


//Função para remover um item do final do Array
document.getElementById("btnRemoveFinal").addEventListener("click", ()=>{
    frutas.pop();
    addFrutas();
});

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
    frutas.sort();
    addFrutas();
});


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
