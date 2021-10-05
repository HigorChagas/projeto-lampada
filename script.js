function lampadaReal() {

    const lampada = document.getElementById('lampada');
    const botaoAcender = document.getElementById('ligar');
    const botaoApagar = document.getElementById('desligar');

    const audioQuebraLampada = new Audio('lampada-quebrando.mp3');
    const audioLigaLampada = new Audio('interruptor.mp3');

    lampada.addEventListener('mouseover', acendeLampada);
    lampada.addEventListener('mouseout', apagaLampada);
    lampada.addEventListener('dblclick', quebraLampada);

    botaoAcender.addEventListener('click', acendeLampada)
    botaoApagar.addEventListener('click', apagaLampada)

    function acendeLampada() {
        lampada.src = './img/ligada.jpg'
        audioLigaLampada.play();
        
    }

    function apagaLampada() {
        lampada.src = './img/desligada.jpg'
        audioLigaLampada.play()
    }

    function quebraLampada() {
        lampada.src = './img/quebrada.jpg'
        lampada.removeEventListener('mouseover', acendeLampada);
        lampada.removeEventListener('mouseout', apagaLampada);
        botaoAcender.removeEventListener('click', acendeLampada);
        botaoApagar.removeEventListener('click', apagaLampada);
        audioQuebraLampada.play()
    }
}

lampadaReal();
