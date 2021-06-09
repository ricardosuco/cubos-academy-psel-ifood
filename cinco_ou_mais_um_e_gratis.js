function solucao(precos) {
    //seu codigo aqui
total = 0

if (precos.length >= 5) {
    for (let i = 0; i < precos.length; i++) 
    total = total + precos[i]
    var menor = Math.min.apply(null, precos )
    total = total - menor
    console.log(total)
}

else if (precos.length < 5) {
    for (let i = 0; i < precos.length; i++)
    total = total + precos[i]
    console.log(total)
}
}