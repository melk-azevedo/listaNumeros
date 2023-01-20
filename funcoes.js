let lista = []
let res = document.getElementById("res")

function inLista(num) {
   lista.push(num)
}

function adicionar() {
    const txnum = document.getElementById("num")
    const list = document.getElementById("list")
    
    if (txnum.value.length == 0 || Number(txnum.value) > 100 || Number(txnum.value) <= 0) {
        alert("Dado inválido")
    } else {
        let num = Number(txnum.value)
        let item = document.createElement("option")
        item.text = `Valor ${num} adicionado`
        list.appendChild(item)
        inLista(num)
        res.innerHTML = ""
    }
}

function fim() {
    res.innerHTML = `Ao todo temos ${lista.length} números cadastrados <br>`
    lista.sort()
    let menor = lista[0]
        maior = lista.at(-1)
        soma = 0
    for (let i = 0; i < lista.length; i++) {
        soma += lista[i]
    }
    res.innerHTML += `O menor número foi ${menor} <br>`
    res.innerHTML += `O maior número foi ${maior} <br>`
    res.innerHTML += `A soma dos números foi ${soma} <br>`
    res.innerHTML += `A média dos números foi ${soma / lista.length} <br>`

}