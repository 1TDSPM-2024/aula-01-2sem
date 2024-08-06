//? Declaração de Arrays
let aFrutas = ["Maça", "Banana", "Laranja", "Morango","Jambo"];

//* Lendo o Array
console.log(aFrutas);
console.table(aFrutas) //! Mostra uma tábela com índices e seus respectivos valores

//* Lendo um único item do array
console.log(aFrutas[0]);

//*Lendo um array com loops for, for of e for in:

// for
for(let i = 0; i < aFrutas.length; i++){
    console.log(aFrutas[i]);
}

console.log("====//====//====//====//====//====//====//====//====//====//====//====")

//for of
for(let fruta of aFrutas){
    console.log(fruta);
}

console.log("====//====//====//====//====//====//====//====//====//====//====//====")

//for in
for (let indice in aFrutas){
    console.log(indice, aFrutas[indice]); //! Diferente do for of, no for in a variavél não recebe os valores e sim os índices
}

console.log("====//====//====//====//====//====//====//====//====//====//====//====")

//* Adicionar um item no array
//No final com push()
aFrutas.push("Abacaxi");
//No ínicio com unshift()
aFrutas.unshift("Melancia")

//* Função que mostrar as frutas
function mostrarFrutas() {
    let elListaFrutas = document.getElementById("listaFrutas");
    elListaFrutas.innerHTML = ""

    for (let fruta of aFrutas) {
        let item = document.createElement("li");
        item.textContent = fruta;
        elListaFrutas.appendChild(item);
    }
}
document.getElementById("btnMostrarFrutas").addEventListener("click", mostrarFrutas);

//* Parte que remove a ultima fruta da lista
document.getElementById("removerFrutaFinal").addEventListener("click", ()=>{
    aFrutas.pop();
    mostrarFrutas();
})

//* Parte que remove a primeira fruta da lista
document.getElementById("removerFrutaInicio").addEventListener("click", ()=>{
    aFrutas.shift(); //! essa função elimina o primeiro item de uma array
    mostrarFrutas();
})

//* Parte que organiza a lista em ordem alfabetica
document.getElementById("ordernar").addEventListener("click", ()=>{
    aFrutas.sort(); //! Só a função sem parametros organiza a array em ordem alfabética
    mostrarFrutas();
})

//* Parte que reverte a ordem apresentada
document.getElementById("reverter").addEventListener("click", ()=>{
    aFrutas.reverse(); //! Essa função reverte a ordem da array
    mostrarFrutas();
})

function pesquisaFruta(fruta) {
    let valorPesquisado = aFrutas.indexOf(fruta);
    if (valorPesquisado >= 0) {
        document.getElementById("itemFruta").innerHTML = aFrutas[valorPesquisado];
        return valorPesquisado;
    } else {

        document.getElementById("itemFruta").innerHTML = "Fruta não encontrada!";
        return -1;
    }
}

document.getElementById("btnPesquisa").addEventListener("click", ()=>{
    pesquisaFruta(document.getElementById("idFruta").value);
})

document.getElementById("btnRemover").addEventListener("click", () => {

    let indiceDaFruta = pesquisaFruta(document.getElementById("idFruta").value);

    if (indiceDaFruta >= 0) {
        aFrutas.splice(indiceDaFruta, 1); //! Esse comando faz com que nesse caso remova o apenas 1 item a partir do indice da fruta dado, isso contando ela
    } else {
        document.getElementById("itemFruta").innerHTML = "ITEM INEXISTENTE!";
    }
    mostrarFrutas();
});
