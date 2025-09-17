let idade = prompt('Qual seu nível de satisfação com a sua vida de 0 a 10?')
let NumeroDaIdade = Number(idade)


if (NumeroDaIdade > 10 ) {
	alert('Error. Insira um número entre 0 e 10.');
    let idade = prompt('Qual seu nível de satisfação com a sua vida de 0 a 10?');
    console.log('Colocou um número maior que 10 (!)');
}

if (NumeroDaIdade <= 10) {
    alert('Parabéns!')
    console.log('colocou um número entre 0 e 10');
}

