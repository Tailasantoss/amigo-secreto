let amigos = [];

function adicionarAmigo() {
    let inputNome = document.getElementById("amigo");
    let nome = inputNome.value.trim();

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    if (amigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    inputNome.value = "";
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo, index) => {
        let item = document.createElement("li");
        item.textContent = amigo;

        let botaoRemover = document.createElement("button");
        botaoRemover.textContent = "❌";
        botaoRemover.classList.add("remover");
        botaoRemover.onclick = () => removerAmigo(index);

        item.appendChild(botaoRemover);
        lista.appendChild(item);
    });
}

function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear!");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    document.getElementById("resultado").textContent = `🎉 O amigo secreto sorteado é: ${amigoSorteado}! 🎊`;
}
