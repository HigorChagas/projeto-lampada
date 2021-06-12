var lampada = document.getElementById('lampada')
var botaoAcender = document.getElementById('ligar')
var botaoApagar = document.getElementById('desligar')
var audio = new Audio('lampada-quebrando.mp3')
var audioDois = new Audio('interruptor.mp3')

lampada.addEventListener('mouseover', acender)
lampada.addEventListener('mouseout', apagar)
lampada.addEventListener('dblclick', quebrar)

botaoAcender.addEventListener('click', acender)
botaoApagar.addEventListener('click', apagar)

function acender() {
    lampada.src = './img/ligada.jpg'
    audioDois.play()
}

function apagar() {
    lampada.src = './img/desligada.jpg'
    audioDois.play()

}

function quebrar() {
    lampada.src = './img/quebrada.jpg'
    lampada.removeEventListener('mouseover', acender)
    lampada.removeEventListener('mouseout', apagar)
    botaoAcender.removeEventListener('click', acender)
    botaoApagar.removeEventListener('click', apagar)
    audio.play()
}