const fs = require('fs')

const dados = fs.readFileSync('dados.json', 'utf-8')

const usuarios = JSON.parse(dados)

console.log("usuários cadastrados no .json", usuarios)

usuarios.push({id : 5, nome: 'Patrocínio', idade: 29})

console.log("usuários cadastrados no .json", usuarios)

fs.writeFileSync('dados.json', JSON.stringify(usuarios, null, 2))

console.log("Usuário cadastrado com sucesso!")