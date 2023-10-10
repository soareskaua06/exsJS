// ex5
var nota1 = prompt("Informe a nota da primeira prova:");
var peso1 = prompt("Informe o peso da primeira prova:");

var nota2 = prompt("Informe a nota da segunda prova:");
var peso2 = prompt("Informe o peso da segunda prova:");

var nota3 = prompt("Informe a nota da terceira prova:");
var peso3 = prompt("Informe o peso da terceira prova:");

nota1 = parseFloat(nota1);
peso1 = parseFloat(peso1);

nota2 = parseFloat(nota2);
peso2 = parseFloat(peso2);

nota3 = parseFloat(nota3);
peso3 = parseFloat(peso3);

var mediaPonderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);

mediaPonderada = mediaPonderada.toFixed(2);

alert("A média ponderada das notas é: " + mediaPonderada);
