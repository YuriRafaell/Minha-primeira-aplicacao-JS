var base = parseFloat(prompt("Digite uma base:"))
        var altura = parseFloat(prompt("Digite uma altura:"))
        var at = base * altura / 2
        if (base < 0 || altura < 0) {
            alert("Entrada inválida!")
        } else {
            alert("Área = " + (at.toFixed(2)) + " m2")
        }