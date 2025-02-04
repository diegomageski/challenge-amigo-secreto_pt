//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let nomes = [];

function adicionarAmigo(){
    let nome = document.querySelector('input').value;
    if (nome!=''){
        nomes.push(nome);
    }
    else {
        alert('Por favor, insira um nome');
    }
    document.querySelector('input').value='';
    console.log(nomes.length);
    atualizarListaAmigos();
}

//o length, retorna a quantidade de elementos, se nao tiver nada, retorna 0.


//função para imprimir a lista nomes, dentro de lista no html

function atualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista atual, se não fica o histórico de várias listas

    nomes.forEach((nome) => {
        let li = document.createElement('li');
        li.textContent = nome;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo(){
    let tamanhoNumero = 0;
    if (nomes.length>=100) tamanhoNumero=1000;
    else if (nomes.length>=10) tamanhoNumero=100;
    else tamanhoNumero=10;

    let numeroSorteado = 0;
    
    while(true){
        let sorteio = Math.floor(Math.random()*tamanhoNumero);
        if (sorteio<nomes.length){
            numeroSorteado=sorteio;
            break
        }
    }
    let printResultado = document.getElementById('resultado');
    printResultado.innerHTML = nomes[numeroSorteado];
}