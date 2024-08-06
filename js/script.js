//? Declaração de Arrays
let aFrutas = ["maça", "banana", "laranja", "morango","jambo"];

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

function addFrutas() {
    let elListaFrutas = document.getElementById("listaFrutas");
    elListaFrutas.innerHTML = ""

    for (let fruta of aFrutas) {
        let item = document.createElement("li");
        item.textContent = fruta;
        elListaFrutas.appendChild(item);
    }
}

document.getElementById("btnAddFrutas").addEventListener("click", addFrutas);




