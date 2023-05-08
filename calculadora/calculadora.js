function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean() {
    document.getElementById('resultado').innerHTML = "";
}

function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        var valorCalculado = eval(resultado);
        var resultadoFormatado = valorCalculado.toString().slice(0, 10);
        document.getElementById('resultado').innerHTML = resultadoFormatado;
    } else {
        document.getElementById('resultado').innerHTML = "Nada...";
    }
}
