let amigos = []

function adicionarNome() {
    let nome = document.getElementById("nome").value
    if(nome != ""){
        amigos.push(nome)
        document.getElementById("nome").value = ""
    }
    else{
        alert("Por favor, insira um nome!")
    }
    
    let campo = document.querySelector("input");
	campo.value = "";
    atualizarLista();
}

function atualizarLista() {
    limparCampo("listaAmigos");
    let lista = document.getElementById("listaAmigos");
    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    let sorteado;
    limparCampo("listaAmigos");
    limparCampo("resultado");
    if (amigos.length >= 2) {
        sorteado = amigos[Math.floor(Math.random() * amigos.length)];
        let resultado = document.getElementById("resultado");
        let item = document.createElement("li");
        item.textContent = "O amigo secreto sorteado é: "+sorteado;
        resultado.appendChild(item);
    }
    else {
        alert("Adicione pelo menos dois amigos para sortear!");
    }
}

function limparCampo(id) {
    campo = document.getElementById(id);
    campo.innerHTML = "";
}