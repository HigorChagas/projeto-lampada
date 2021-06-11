var lampada = document.getElementById('lampada')
var botaoAcender = document.getElementById('ligar')
var botaoApagar = document.getElementById('desligar')
var audio = new Audio('lampada-quebrando.mp3')
var audioDois = new Audio('interruptor.mp3')

lampada.addEventListener('mouseover', acender)
lampada.addEventListener('mouseout', apagar)
lampada.addEventListener('click', quebrar)

botaoAcender.addEventListener('click', acender)
botaoApagar.addEventListener('click', apagar)

function acender() {
    document.getElementById('lampada').src = './img/ligada.jpg'
    audioDois.play()
}

function apagar() {
    document.getElementById('lampada').src = './img/desligada.jpg'
    audioDois.play()
}

function quebrar() {
    document.getElementById('lampada').src = './img/quebrada.jpg'
    audio.play()
}