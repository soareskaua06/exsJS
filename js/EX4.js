// Ex4
var estoque = 10; 
var quanDesejada = prompt("Me diga a quantidade desejada do produto:");

quanDesejada = parseInt(quanDesejada);


if (quanDesejada > 0 && quanDesejada <= estoque) {
    alert(`Produto disponível! A quantidade desejada está em estoque.`);
} else {
    alert(`Produto está indisponível ou a quantidade desejada é maior do que o estoque!!!`);
}
