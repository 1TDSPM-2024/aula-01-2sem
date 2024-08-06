

//Declaração de array de frutas
let frutas = ["maçã", "banana", "laranja", "morango","jambo"];

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