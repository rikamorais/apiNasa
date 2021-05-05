const key = '6sG0hzqMR4eKpLBcfngGYn3879YbJWGXo1ESlwR9'

let divImagem = document.getElementById("imagem")

const req = new XMLHttpRequest()

// --- API IMAGEM --------------------------
req.open('GET', `https://api.nasa.gov/planetary/apod?api_key=${key}`)
req.addEventListener("load", function () {
    if ( this.status === 200 && this.readyState === 4 ) {
        let dados = JSON.parse(req.responseText)
        let img = dados.url

        divImagem.innerHTML += `<img src="${img}" title="${dados.title}" id="imagemNasa">`
    }
})
req.send()

// --- BOTÃO --------------------------
const newReq = new XMLHttpRequest()
botao.addEventListener("click", function (event) {
    let date = document.getElementById("data").value

    event.preventDefault();
    newReq.onreadystatechange = function () {
        if ( this.status === 200 && this.readyState === 4 ) {
            let dados = JSON.parse(newReq.responseText)
            let img = dados.url
            imagemNasa.src = img
            imagemNasa.title = dados.title
        }
    }
    newReq.open('GET', `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`)
    newReq.send()
})