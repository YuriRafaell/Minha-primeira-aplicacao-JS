function clean() {
    document.getElementById('altura').value = "";
    document.getElementById('massa').value = "";
    document.getElementById('resultado').innerHTML = "";
}



function resposta() {
    var altura = parseFloat(document.getElementById('altura').value);
    var massa = parseFloat(document.getElementById('massa').value);
    var imc;

    imc = massa / (altura ** 2);

    if (altura < 0 || massa < 0) {
        document.getElementById('resultado').textContent = "Entrada inválida!";
    } else if (altura > 0 || massa > 0) {
        if (imc < 16.9) {
            document.getElementById('resultado').textContent = "Muito abaixo do peso";
        } else if (imc >= 17 && imc < 18.4) {
            document.getElementById('resultado').textContent = "Abaixo do peso";
        } else if (imc >= 18.5 && imc < 24.9) {
            document.getElementById('resultado').textContent = "Peso normal";
        } else if (imc >= 25 && imc < 29.9) {
            document.getElementById('resultado').textContent = "Acima do peso";
        } else if (imc >= 30 && imc < 34.9) {
            document.getElementById('resultado').textContent = "Obesidade Grau I";
        } else if (imc >= 35 && imc < 40) {
            document.getElementById('resultado').textContent = "Obesidade Grau II";
        } else if (imc >= 40) {
            document.getElementById('resultado').textContent = "Obesidade Grau III";
        }
    }
}
