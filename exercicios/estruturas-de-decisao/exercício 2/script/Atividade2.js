let Idade = prompt('Insira um número qualquer de 1 a 1000');
let NumeroDaIdade = Number(Idade);

if (NumeroDaIdade > 1000 || NumeroDaIdade < 1) {
    alert('Error. Coloque um número entre 1 e 1000.');
    let Idade = prompt('Insira um número qualquer de 1 a 1000');
}

if (NumeroDaIdade >= 532 && NumeroDaIdade <= 743) {
    alert('Boa!')
    console.log('Colocou um número entre 532 e 743');
}

if (NumeroDaIdade < 532) {
    alert('Não colocou o número desejável');
    console.log('Não colocou número entre 532 e 743');
}
if (NumeroDaIdade > 743) {
    alert('Não colocou o número desejável');
    console.log('Não colocou número entre 532 e 743');
}