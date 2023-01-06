function calcular_imc(){
    var altura = document.getElementById('altura').value
    var massa = document.getElementById('massa').value
    var imc;

    imc = massa / (Math.pow(altura, 2))
    
    if (altura < 0 || massa < 0) {
        alert("Entrada inválida!")

    } 
    else if (altura > 0 || massa > 0) {
        if (imc < 16.9) {
            alert("Muito abaixo do peso")
        } else if (imc >= 17 && imc < 18.4) {
            alert("Abaixo do peso")
        } else if (imc >= 18.5 && imc < 24.9) {
            alert("Peso normal")
        } else if (imc >= 25 && imc < 29.9) {
            alert("Acima do peso")
        } else if (imc >= 30 && imc < 34.9) {
            alert("Obesidade Grau I")
        } else if (imc >= 35 && imc < 40) {
            alert("Obesidade Grau II")
        } else if (imc > 40) {
            alert("Obesidade Grau III")
        }
    }
}

function resposta(){
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else{
        document.getElementById('resultado').innerHTML = "Nada..."
    }
}
