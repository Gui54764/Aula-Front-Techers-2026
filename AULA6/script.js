console.log("Hello World")

console.log(9 + 4)

let idade = 14
const nome = "Guilherme"

console.log(nome)

console.log("Bem vinda" + nome + "ao curso de programacao")
console.log('Bem vinda ${nome} ao curso de programacao')

for (let i = 0; i <= 10; i++) {
    if (i === 2) {
        console.log(i)
    }
}

for (let i = 10; i >= 0; i--) {
    console.log(i)
}

let frutas = ["maça", "banana", "kiwi"]
console.log(frutas)

frutas[3] = "manga"

console.log(frutas[3])

frutas[1] = "pera"
console.log(frutas)

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}

function mudarTudo(){
    const titulo = document.getElementById("titulo")
    titulo.innerText = "lista de compras"
    titulo.style.color = "blue"
    titulo.style.fontFamily = "WingDings"

    let itens = ["maça", "banana", "kiwi", "manga"]
    let container = document.getElementById("lista-frutas")

    container.innerHTML = ""

    for(let i = 0; i < itens.length; i++){
        container.innerHTML += `<p>Item ${i+1}: ${itens[i]} </p>`
    }
}