const valor = function(ValorA, ValorB, ValorC) {
    return ValorA && ValorB && ValorC
 //     if (ValorA > ValorB) {
 //
 //        if (ValorB > ValorC) {
 //           console.log(ValorB)
 // 
 //       } else {
 //           console.log(ValorC)
 //       }
 //       
 //   } else {
 //       console.log(ValorB)
 //   }
    
    
    if (typeof ValorA == 'number' && typeof ValorB == 'number') {
       console.log('blz')
    } else {
        console.log('Numero não identificado')
    }
}

console.log(valor(400, 20, 90))