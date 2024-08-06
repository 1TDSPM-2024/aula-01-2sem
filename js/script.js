//declaração de array
let frutas = ["maçã", "banana", "laranja", "morango", "jambo"];
console.log("_____________________________________________");
console.log(frutas);
console.table(frutas); //valor e indíce

console.log("_____________________________________________");
console.log(frutas[0]); //valor específico


console.log("_____________________________________________");
for(let i =0;i < frutas.length; i++){
    console.log(frutas[i]);
}


console.log("_____________________________________________");
for (let fruta of frutas){
    console.log(fruta);
}

console.log("_____________________________________________");
for(let indice in frutas){
    console.log(indice, frutas[indice]); //retorna indice do array
}

console.log("_____________________________________________");
//add item
frutas.push("abacaxi"); //final da lista
frutas.unshift("melancia"); //começo da lista

//remove item do final do array
document.getElementById("btnRemoveFrutas").addEventListener("click", ()=>{
    frutas.pop();
    addFrutas();
});

//remove item do começo do array
document.getElementById("btnRemoveIFrutas").addEventListener("click", ()=>{
    frutas.shift();
    addFrutas();

});


//frutas.splice()
//(qual quer remover(indice), quantos quer remover dps desse indice)

console.log("_____________________________________________");
//Colocar em A-Z
document.getElementById("btnOrdem").addEventListener("click", ()=>{
    frutas.sort();
    addFrutas();
});

//Coloca em ordem apresentada no começo
document.getElementById("btnReverse").addEventListener("click", ()=>{
    frutas.reverse();
    addFrutas();
});


console.log("_____________________________________________");
document.getElementById("btnPesquisa").addEventListener("click", ()=>{
    //indexOf //retorna  apenas primeira (string)
    pesquisarFruta(document.getElementById("idFruta").value);
});

document.getElementById("btnRemover").addEventListener("click", ()=>{
    let indiceDaFruta = pesquisaFruta(document.getElementById("idFruta").value);
    
    if(indiceDaFruta >=0){
        frutas.splice(indiceDaFruta,1);
    }else{
        document.getElementById("itemFruta").innerHTML = "item não existe";
    }
});



function pesquisaFruta(fruta){
    let valorPesquisado = frutas.indexOf(fruta);
    if(valorPesquisado >=0){
        document.getElementById("itemFruta").innerHTML = frutas[valorPesquisado];
        return valorPesquisado;
    }else{
        document.getElementById("itemFruta").innerHTML = "fruta não encontrada";
        return -1;
    }
};









console.log("_____________________________________________");
function addFrutas(){
    let listaFrutas = document.getElementById("lista-frutas");

    listaFrutas.inneHTML ="";
    for(let fruta of frutas){
        let item = document.createElement("li");
        item.textContent = fruta;
        listaFrutas.appendChild(item);
    }

}
document.getElementById("btnAddFrutas").addEventListener("click", addFrutas);
frutas.push("caqui");
