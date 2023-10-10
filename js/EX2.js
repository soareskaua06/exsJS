// Ex2 - Solicitar o peso do usuário
var peso = prompt("Informe o seu peso em kg:");
var altura = prompt("Informe a sua altura em metros:");


peso = parseFloat(peso);
altura = parseFloat(altura);

var imc = peso / (altura * altura);


imc = imc.toFixed(2);
if (imc < 18.5) {
    alert("Seu IMC é " + imc + ". Você está magrãoo");
} else if (imc >= 18.5 && imc <= 24.9) {
    alert("Seu IMC é " + imc + ". Parabéns! Você está no peso ideal.");
} else {
    alert("Seu IMC é " + imc + ". Você tá gordo");
}

