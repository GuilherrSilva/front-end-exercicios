let idade = prompt('Insira a sua idade:');
let renda = prompt('Insira a sua renda mensal:');

//if ( idade >=18 && renda >= 2420) {
//    alert('Você está apto a fazer um consórcio!');
//    console.log('Apto a fazer consórcio');
//} else {
 //   alert('Você não está apto a fazer um consórcio!');
 //   console.log('Não está apto a fazer consórcio');
//}

if ( idade >= 18) {

    let renda = prompt('Insira a sua renda')

    if ( renda >= 3036) {
        console.log('Está apto')      
    } else {
        console.log('Você não tem renda');
    }


} else {
    console.log('Infelizmente você não tem a idade')
}