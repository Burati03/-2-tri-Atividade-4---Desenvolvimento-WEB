let nomeCliente = "Ana";
let valorCompra = 120;  

let desconto = 10; 
 
let clienteVIP = false;

if (valorCompra >= 100 || clienteVIP) {
    let valorFinal = valorCompra - desconto;
    console.log("Olá, " + nomeCliente + "!");
    console.log("Parabéns, você recebeu um desconto de R$" + desconto);
    console.log("O valor final da sua compra é R$" + valorFinal);
} else {
    console.log("Olá, " + nomeCliente + "!");
    console.log("O valor da sua compra é R$" + valorCompra);
    console.log("Para ganhar desconto, sua compra deve ser acima de R$100 ou ser cliente VIP.");
}
