// Exemplo-01

// function minhaFuncao(){
//     console.log(`Testando`)
// }

// minhaFuncao()
// minhaFuncao()

// Exemplo-02

// const minhaFuncaoEmVariavel = function(txt){
//     console.log(`Imprimindo: ${txt}`)
// }

// minhaFuncaoEmVariavel(`Sapato`)
// minhaFuncaoEmVariavel(`colher`)
// minhaFuncaoEmVariavel(`5+5`)

// Exemplo-03

// const a = 10;
// const b = 20;
// const c = 30;
// const d = 40;

// function soma(n1, n2){
//     console.log(`A soma entre ${n1} + ${n2} é = ${n1 + n2}`)
//     console.log(`A sub entre ${n1} - ${n2} é = ${n1 - n2}`)
//     console.log(`A div entre ${n1} / ${n2} é = ${n1 / n2}`)
//     console.log(`A mult entre ${n1} * ${n2} é = ${n1 * n2}`)
//     return
// }
// soma(a,b)
// soma(c,b)
// soma(d,a)

// Exemplo-04

// function raizQuadrada (numero){
//     console.log(numero * numero)
// }
// raizQuadrada(4)

// 4.1

// function raizQuadrada (numero){
//     return numero * numero
    
// }
// console.log(raizQuadrada(6))

// 4.2

// const raizQuadrada = (numero) => {
//     return numero * numero
// }
// console.log(raizQuadrada(5))

// Exemplo-05

// const testeArrow = () => {
//     console.log(`Essa é uma arrow fonction`)
// }

// testeArrow()

// 5.1

// const parOuImpar = (n) => {
//     if(n % 2 === 0){
//         console.log(`${n} é par`)
//         return
//     }
//     console.log(`${n} é impar`)
// }
// parOuImpar(2)

// Exemplo-06

// const lista = [1, 2, 3, 4, 5,6, 7, 8]

// console.log(lista)
// console.log(typeof lista)

// console.log(lista[1])
// console.log(lista[0])
// console.log(lista.length)

// const lista2 = ["Gol", "Stilo", "Fusca", "Golf", "Opala", "Punto"] 
// for(let i = 0; i < lista2.length; i++){
//     console.log(`Elemento da lista2: ${lista2[i]}`)
// }


// const lista = [1, 2, 3, 4, 5] 

//     for(let i = 0; i < lista.length; i++){
//     console.log(`Elemento da lista: ${lista[i]}`)
// }


// Exercício-07
// escreva um Array chamado Cores (azul amarelo, verde , vermelho, branco)

// escreva uma estrutura de repetição for p/ retornar todos os elemento do array

// const cores = ["Azul", "Amarela", "Verde", "Vermelho", "Branca"]

//  for(let i = 0; i <cores.length; i++){
//     console.log(`As Cores são: ${cores[i]}`)
// }   

// exemplo-08

// const nums = [1, 2, 3, 4, 5]

// nums.forEach((n) => {
//     console.log(`O numero atual é: ${n}`)
// })

// 8.1

// const numbers = [5, 12, 4, 22];
// const othorNumbers = [1, 2, 3];

// const allNumbers = numbers.concat(othorNumbers)

// console.log(allNumbers);

// const text = "algum texto";
// const text2 = "ALÔ JOVEM"
// console.log(text.toUpperCase());
// console.log(text2.toLocaleLowerCase());

// const array = ["a", "b", "c"];

// array.push("d");

// console.log(array);
// console.log(array.length);

// array.pop();
// const itemRemovido = array.pop();

// console.log(itemRemovido);
// console.log(array);
// console.log(array.length);

// array.push("Dá", "Para", "Inserir", "Vários");
// console.log(array);


// const letters = ["a", "b", "c"];

// const letter = letters.shift();

// console.log(letter);;
// console.log(letters);

// letters.unshift("z", "x", "y");
// letters.unshift("p");

// console.log(letters);





