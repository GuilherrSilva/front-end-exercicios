const { version } = require("react");

let usoDiasDaSemana = [2, 2, 2.4, 5, 1.2, 0.5, 12] // Domingo
let diasDaSemana = [
'Domingo',
'Segunda-feira',
'Terça-feira',
'Quarta-feira',
'Quinta-feira',
'Sexta-feira',
'Sabado'
]

// Determinar se o uso do dia é verde, amarelo ou vermelho
const indicadorDeUso = (numeroDeHoras) => {
    if (numeroDeHoras <= 1) {
        return '🟢';
    } else if (numeroDeHoras <= 3) {
        return '🟡';
    } else {
        return '🔴';
    }
}

//console.log( 'Domingo:' + indicadorDeUso(usoDiasDaSemana[0]));
//console.log( 'Segunda-feira:' + indicadorDeUso(usoDiasDaSemana[1]));
//console.log('Terça-feira:' + indicadorDeUso(usoDiasDaSemana[2]));
//console.log('Quarta-feira:' + indicadorDeUso(usoDiasDaSemana[3]));
//console.log('Quinta-feira:' + indicadorDeUso(usoDiasDaSemana[4]));
//console.log('Sexta-feira:' + indicadorDeUso(usoDiasDaSemana[5]));
//console.log('Sabado:' + indicadorDeUso(usoDiasDaSemana[6]));

for(let contador = 0; contador <= 6; contador++) {
    let farol = indicadorDeUso(usoDiasDaSemana[contador]);
    let dia = diasDaSemana[contador];
    let horas = usoDiasDaSemana[contador];

    if (horas > 1) {
        let mensagem = 'horas de uso'
    } else {
        let mensagem = 'horas de uso'
    }

    console.log(`${farol} 📆 ${ dia } | ${ horas} horas de uso`);
}

//console.log(typeof usoDiasDaSemana);
//console.log(typeof usoDiasDaSemana[0]);
//console.log(typeof indicadorDeUso);

