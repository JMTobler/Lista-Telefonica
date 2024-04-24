const form = document.getElementById('form-telefone');
const contatos = [];
const numeros = [];

let linhas = '';

function addLinha() {
    const nomeContato = document.getElementById('nome-contato');
    const numeroContato = document.getElementById('numero-contato');

    if(contatos.includes(nomeContato.value)) {
        alert(`O contato ${nomeContato.value} já foi inserido!`)
    } else {
        contatos.push(nomeContato.value);
        numeros.push(parseFloat(numeroContato.value));

        let linha = '<tr>';
        linha += `<td>${nomeContato.value}</td>`;
        linha += `<td>${numeroContato.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }


    nomeContato.value = '';
    numeroContato.value = '';
}

function attTabela() {
    const corpoTabela = document.querySelector('tbody');

    corpoTabela.innerHTML = linhas;
}


form.addEventListener('submit', function(e) {
    e.preventDefault();

    addLinha();
    attTabela();
});

