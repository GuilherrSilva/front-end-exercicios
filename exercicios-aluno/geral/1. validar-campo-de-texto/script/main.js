const confirmacao = document.getElementById('btn-adicionar');
let resposta = document.getElementById('input')

confirmacao.onclick = function() {
    console.log(resposta.value)

    if (resposta.value != "") {
    alert('Cadastrado')
} else {
    alert('Error, nome não identificado')
}
    
}

