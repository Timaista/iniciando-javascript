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

let linguagens = ["GML", "javascript", "C#"]
console.log(`Minhas linguagens favoritas são: ${linguagens[0]}, ${linguagens[1]} e ${linguagens[2]}`)

let contagem = 5
while (contagem >=1) {
    console.log(contagem)
    contagem--
}
console.log("Contagem regressiva encerrada.")

for (let i = 0; i <=10; i++) {
    if(i%2 === 0){
        console.log(i)
    }
}

cursos = ['Curso de inglês', 'Curso de redação', 'Curso de programação']
console.log('Estou matriculado em:')
for (let curso of cursos) {
    console.log(curso)
}

filme = {
    titulo: 'Barquinhos',
    ano: 2011,
    diretor: 'Cristiano Valente'
}
for (let inf in filme) {
    console.log(`${inf}: ${filme[inf]}`)
}

function calcularMedia(a, b, c) {
    return (a + b + c) / 3
}
let media = calcularMedia(10, 8, 7.5)
console.log('A média do aluno é:', media)

const desconto = (preco, percentual) => {
    return (preco * (preco - percentual)) / 100
}
console.log(`O preço atualizado é de ${desconto(100, 20)} reais`)