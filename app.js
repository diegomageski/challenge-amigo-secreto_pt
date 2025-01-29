//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomes = [];

function adicionarAmigo(){
    let nome = document.querySelector('input').value;
    if (nome!=''){
        nomes.push(nome);
    }
    document.querySelector('input').value='';
    console.log(nomes.length);
}

//o length, retorna a quantidade de elementos, se nao tiver nada, retorna 0.