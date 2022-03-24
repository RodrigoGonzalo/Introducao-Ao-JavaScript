// Funções/Exressions

//Funçãp
/*function soma (a, b = 0){
    return a + b
}

console.log( soma(10,5))

console.log("-----------------------")
*/
// Atribuir a variável uma função 
let digaOi = function(nome){
    console.log("OIIIIIIIII")
}
console.log(digaOi)
digaOi()

console.log("-----------------------")


// Arrow functions

let soma = (a, b) => a + b;

console.log(soma)
console.log(soma(50,50))

let dobro = n => n *2
console.log(dobro(10))

console.log("-----------------------")

// Funções sem parâmetros
/*
let SayHi =_> console.log("hello")
SayHi()
*/
let subtracao = (a,b) => {
    let resultado = a - b
    return resultado
}

console.log(subtracao(50,20))

console.log("-----------------------")

// Spread Operator

const MinhaArray = [1,2,3]
console.log(MinhaArray)
console.log(...MinhaArray)

const Somar = (a,b,c) => a + b + c
console.log(soma(...MinhaArray))

const OutroArray = [...MinhaArray, 4, 5, 6]
console.log(OutroArray)

console.log("-----------------------")

// Destructuring
const cores = ["azul","vermelho","verde","amarelo"]
const [cor1, cor2, cor3, cor4] = cores

console.log(cores)
console.log(cor1)
console.log(cor2)
console.log(cor3)

const MeuObjeto = {x: 10, y: 20, z: 30}
const {x,y,z} = MeuObjeto

console.log(`X = ${x} Y = ${y} Z = ${z}`)

// JavaScript POO

let Carro = {Marca: "Toyota", modelo: "500", cor: "Preto"}

console.log(Carro)
console.log(Carro.Marca)

let Pessoa = {
    Nome: "Jusiscley",
    Sobrenome: "Arantes da Silva",
    NomeCompleto: _=> `${this.Nome} ${this.Sobrenome}`
}

console.log(Pessoa)
console.log(Pessoa.Nome)


function criarPessoa(Name){
    let obj = {}
    console.log(obj)
    obj.nome = Name
    console.log(obj)

    obj.digaOi = function(){
        console.log(`Olá, ${obj.nome}`)
    }
    return obj
}

let pessoa = criarPessoa("Juvenal")
pessoa.digaOi()

function Cidadao(Nombre){
    this.Nombre = Nombre
    this.digaOi = function(){
        console.log(`Ola, ${Nombre}`)
    }
}

let cidadao = new Cidadao("Denylsom")
Cidadao.digaOi()

class Person{
    constructor(){
        this.name = ""
        this.email = ""
    }
}

const person = new Person()
person.name
console.log(person)
console.log(person.name)

// método estático

class Comida{
    constructor(NomeComida){
        this._NomeComida = NomeComida
    }

    get NomeComida(){
        return this._NomeComida
    }

    digaOi(){
        console.log(`Você falou, ${this._NomeComida}`)
    }

    static QueClasseEuSou(){
        console.log("Sou a classe Comida")
    }
}

Comida.QueClasseEuSou()
let comida = new Comida("Miojo")