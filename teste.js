const menssage = "Hello World"
console.log(menssage)

let nota1 = 9;
let nota2 = 7;
let media = (nota1 + nota2) / 2; 
console.log("A média do aluno é: "+media)

let economias = 0;
economias += 50;
economias *= 2;
economias -= 30;
console.log("Valor final: " + economias)

let temp = 32;
console.log("Está quente? ", (temp > 30));

let temmingresso = true
let maiordeidade = true
console.log("Pode entrar no show?", temmingresso && maiordeidade)

let velocidade = 90
if (velocidade <= 60) {
    console.log("Dentro do limite.")
} else if (velocidade <= 80) {
    console.log("Atenção.")
} else {
    console.log("Mutado.")
}

let pontuacao = 100
let resultado = pontuacao >= 100 ? "Você ganhou um prêmio!" : "Tente novamente"
console.log(resultado)

let carro = {
    modelo: "Porsche Boxster S 3.4 310cv",
    ano: 2009,
    automatico: true,
}
console.log(`O carro modelo ${carro.modelo} do ano ${carro.ano} é automático?`, carro.automatico)