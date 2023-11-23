
function tocaSom(idAudio) {
    var audio = new Audio(`audio/${idAudio}.m4a`);
    audio.play()
}

let lista = document.querySelectorAll(".tecla")
let i = 0
while (i < lista.length) {
    const efeito = lista[i].classList[1]
    const idAudio = efeito
    console.log(idAudio)
    lista[i].onclick = function () {
        tocaSom(idAudio)
    }
    i++
}