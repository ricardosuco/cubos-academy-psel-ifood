function solucao(letra, palavras) {
	//seu codigo aqui
      i = 0
for (let item of palavras)
    if (item[0] !== letra)
    i++

console.log(i)
}

function processData(input) {
	const {letra, palavras} = JSON.parse(input)[0];
    solucao(letra, palavras);
} 