function solucao(obj) {
	//seu codigo aqui
    if (obj.temIngresso == false || (obj.idade <= obj.censura && obj.estaComPais == false)) {
        console.log("ACESSO NEGADO")
    }

    else if (obj.temCarteirinha == true || obj.idade < 18) {
        console.log("MEIA")
    }

    else if (obj.temCarteirinha == false || obj.idade >= 18) {
        console.log("INTEIRA")
    }

}