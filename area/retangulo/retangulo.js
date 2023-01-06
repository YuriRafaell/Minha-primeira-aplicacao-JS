var base = parseFloat(prompt("Digite uma base:"))
        var altura = parseFloat(prompt("Digite uma base:"))
        var ar = base * altura
        if (base < 0 || altura < 0) {
            alert("Entrada inválida!")
        } else {
            alert("Área = " + (ar.toFixed(2)) + " m2")
        }