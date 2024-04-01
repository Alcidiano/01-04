let nome = "Alcidiano"
console.log(nome)

nome = "Alcidiano Ferreira"
console.log(nome)

const idade = 33
console.log(idade)

// idade = 34
// console.log(idade)

console.log( `O nome do usuário é: ${nome} essa pessoa tem ${idade} anos`)

// const name1 = prompt("Digite o seu nome")
// console.log("O Nome digitado foi"  +  name1)
// console.log(`O Nome digitado foi  ${name1}`)

// alert(`O Nome digitado foi ${name1}`)

console.log("teste")
console.error("Deu Ruim 😥")
console.warn("Alerta 😱")

// const m = 5
// if(m >=5){
//     console.log("M é maior que 5" + " vamor de M =" + m)
// }

// const user = prompt("Digite o seu nome")

// if(user == `Alcidiano`){
//     console.log(`Bem vindo ${user}`)
// }else{
//     console.log(`Uhm... novo por aqui ${user}`)
// }


// const nota = prompt("Digite a média final")
// if(nota >= 7){
//     console.log("Aprovado")
// } else{
//     console.log("Reprovado")
// }

// const nota = prompt("Digite a média final")
// if(nota >= 7){
//     console.log("Aprovado")
// }else if(nota > 5 && nota< 6){
//     console.log('Recuperação Forte')
// } else if(nota >= 6){
//     console.log("Trabalho geral")
// } else{
//     console.log("Reprovado")
// }

const diaSemana = parseInt(prompt("Dia da Semana"))

if(diaSemana == 1){
    alert("Segunda")
}

else if(diaSemana == 2){
    alert("Terça")
}

else if(diaSemana == 3){
    alert("Quarta")
}

else if(diaSemana == 4){
    alert("Quinta")
}

else if(diaSemana == 5){
    alert("Sexta")
}

else if(diaSemana == 6){
    alert("Sabado")
}

else if(diaSemana == 7){
    alert("Domingo")
}

else{
    alert("Dia Inválido")
}


for (let i = 1; i <= 50; i++) {
    console.log(i);
}

