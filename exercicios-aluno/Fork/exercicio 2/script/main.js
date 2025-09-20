let peso = 0
let pesoTotal = 0

for (let cont= 1; cont < 11; cont += 1) {
    peso = prompt('Digite o peso da pessoa número ' + cont);
    pesoTotal = pesoTotal + Number(peso);
    console.log(pesoTotal)
}

let media = pesoTotal / 10
console.log('A média de peso das 10 pessoas é: ' + media)