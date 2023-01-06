function resposta(){
    if (ano < 0) {
        alert("Entrada inválida!")

    } else if (ano > 0) {
        if (((ano % 4 == 0) && (ano % 100 != 0)) || (ano % 400 == 0)) {
            alert("O ano " + ano + " é bissexto")


        } else {
            alert("O ano " + ano + " não é bissexto")
        }
    }
}