let experiencia = prompt('insira a sua experiência como professor');
let pontuacao = 0;

if ( experiencia < 5) {
    pontuacao = pontuacao + 10; // Expressão

} else if ( experiencia >= 5) {
    pontuacao = pontuacao + 20;
}

let formacao = prompt('insira a sua formação acadêmica')

if ( formacao == 'graduação') {
    pontuacao += 10;
} else if ( formacao == 'especialização') {
    pontuacao +=20;
} else if ( formacao == 'mestrado') {
    pontuacao +=30;
} else if ( formacao == 'doutorado') {
    pontuacao +=40;
}

console.log(`Sua pontuação final é de: ${pontuacao}`);

''