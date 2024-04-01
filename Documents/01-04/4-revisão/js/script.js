// console.log("Óla Mundo!")
// console.log('Óla Mundo2!')
// console.log(`Olá Mundo3!`)

// let nome = `Alcidiano`
// const idade = 33
// var profissao = 'programador'

// console.log(typeof nome)
// console.log(typeof idade)
// console.log(profissao)

// console.log(nome + idade +profissao)


// console.log(`${nome} ${idade} ${profissao}`)
// console.log(`Usuário: ${nome} Idade: ${idade} Profissão: ${profissao}`)

// var idade = parseInt(prompt("Digite sua idade"))
// alert("Você tem " + idade + " anos")

 
// alert("Daqui a 10anos voçÊ terá" + idade + " anos")

// var idade2 = idade + 10

// alert("Daqui aa 10 anos voçê terá " + idade2 + " anos")

// let nome = prompt("Digite seu nome")
// let sobrenome = prompt("Sobrenome")

// alert(`O nome completo é: ${nome} ${sobrenome}`)

// let idade = parseInt(prompt("Idade"))

// if(idade >= 18){
//     alert(`Pode entrar
//     `)
// }else{
// alert(`Não pode entrar`)
// }

// let idade = parseInt(prompt("Idade"))

// if(idade >= 18){
//     alert(`Pode entrar
//     `)
// }else if(idade >=15 && idade<18){
//     alert(`Pode entrar com os pais`)
// }
// else{
// alert(`Não pode entrar`)
// }

// for(let i = 0; i <= 50; i++) {
//     console.log(`O valor de i é: ${i}`)
// }

// let p = 0;

// while(p <= 5){
//     console.log(`Repetindo ${p}`)
//     p++
// }

// let a = 10

// do{
//     console.log(`Valor de A: ${a}`)
//     a = a -1
// }while(a > 1)

let trabalho = prompt("Digite seu trabalho")

switch(trabalho){
    case "programador":
    console.log(`Voçê gosta de programar`);
    break;
    case "engenheiro":
    console.log(`Voçê gosta de calcular`);
    break;

    case "Advogado":
    console.log(`Voçê gosta de justiça`);
    break;
   
    default:
    console.log("Profissão não encontrada")
}
