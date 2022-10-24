var opcao = prompt()

//Cálculo do IMC
if (opcao == "imc") {
   var altura = parseFloat(prompt())
   var massa = parseFloat(prompt())
   var imc = massa / (Math.pow(altura, 2))

   if (imc < 16.9) {
      alert('Muito abaixo do peso')
   } 
   else if (imc >= 17 && imc < 18.4) {
      alert('Abaixo do peso')
   } 
   else if (imc >= 18.5 && imc < 24.9) {
      alert('Peso normal')
   } 
   else if (imc >= 25 && imc < 29.9) {
      alert('Acima do peso')
   } 
   else if (imc >= 30 && imc < 34.9) {
      alert('Obecidade Grau I')
   } 
   else if (imc >= 35 && imc < 40) {
      alert('Obecidade Grau II')
   } 
   else if(imc > 40){
      alert('Obecidade Grau III')
   } 
   else{
      alert('Entrada inválida!')
   }
}

//Cálculo da área
else if(opcao == "area"){
   var categoria = prompt()

   if(categoria == 'triangulo'){
      var base = parseInt(prompt())
      var altura = parseInt(prompt())
      var at = base * altura / 2

      if(base < 0 || altura < 0){
         alert('Entrada inválida!')
      }
      else{
         alert("Área = " + at + " m²")
      }
   }

   else if(categoria == "retangulo"){
      var base = parseInt(prompt())
      var altura = parseInt(prompt())
      var ar = base * altura

      if(base < 0 || altura < 0){
         alert('Entrada inválida!')
      }

      else{
         alert("Área = " + ar + " m²")
      }
   }

   else if(categoria == "circulo"){
      var raio = parseFloat(prompt())
      var ac = Math.PI * (Math.pow(raio,2))
      alert("Área = " + (ac.toFixed(2)) + " m²")
   } 
   else{
      alert("Entrada inválida!")
   }
}

//Cálculo do ano bissexto
else if(opcao == "ano_bissexto"){
   var ano = parseInt(prompt())

   if(ano < 0){
      alert("Entrada inválida!")
   }

   else if(ano > 0){
      if(((ano % 4 == 0) && (ano % 100 != 0)) || (ano % 400 == 0)){
         alert("O ano " + ano + " é bissexto")
      }

      else{
         alert("O ano " + ano + " não é bissexto")
      }
   }
}

//Cálculo de raízes
else if(opcao == "raizes"){
   var a = parseFloat(prompt())
   var b = parseFloat(prompt())
   var c = parseFloat(prompt())
   var delta = (Math.pow(b,2) - 4 * a * c)

   if(delta < 0){
      alert('Raízes complexas')
   }

   else if(delta >= 0){
      var x1 = (-b + (Math.sqrt(Math.pow(b,2) -4 * a * c))) / 2 * a
      var x2 = (-b - (Math.sqrt(Math.pow(b,2) -4 * a * c))) / 2 * a

      alert("x1 = " + (x1.toFixed(2)) + "\n")
      alert("x2 = " + (x2.toFixed(2)))
   }

   else{
      alert("Entrada inválida!")
   }
}

//Cálculo de porcentagem
else if(opcao == "porcentagem"){
   var p = parseFloat(prompt())
   var vb = parseFloat(prompt())
   var va = vb * (1 + p / 100)

   if(p > 0){
      alert("O valor " + vb + " com juros de " + (p.toFixed(2)) + "% será " + va)
   }

   else if(p < 0){
      alert("O valor " + vb + " com desconto de " + (p.toFixed(2)) + "% será " + va)
   }

   else{
      alert("Entrada inválida!")
   }
}

//Caso não seja nenhum cálculo

else{
   alert("Entrada inválida, tente novamente!")
}