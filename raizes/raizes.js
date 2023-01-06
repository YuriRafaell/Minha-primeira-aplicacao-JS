function resposta(){
    var delta = (Math.pow(b, 2)) - 4 * a * c
    if (delta < 0) {
        alert("Raízes complexas")

    } else if (delta >= 0) {
        var x1 = (-b + (Math.sqrt(Math.pow(b, 2) - 4 * a * c))) / 2 * a
        var x2 = (-b - (Math.sqrt(Math.pow(b, 2) - 4 * a * c))) / 2 * a
        alert("x1 = " + (x1.toFixed(2)) + "\n")
        alert("x2 = " + (x2.toFixed(2)))

    } else {
        alert("Entrada inválida!")
    }
}