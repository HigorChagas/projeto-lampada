function lampada() {
    const lampada = document.querySelector('#lampada');

    lampada.addEventListener('mouseover', function () {
        acendeLampada();
    });

    lampada.addEventListener('mouseout', function () {
        apagaLampada();
    });

    document.addEventListener('click', function (event) {
        const elemento = event.target;

        if (elemento.classList.contains('ligar')) {
            acendeLampada();
        }

        if (elemento.classList.contains('desligar')) {
            apagaLampada();
        }
    });

    document.addEventListener('dblclick', function() {
        lampadaQuebrada();
    })

    function acendeLampada() {
        if(!lampadaQuebrada()) {
            lampada.src = './img/ligada.jpg';
        }
    }

    function apagaLampada() {
        if(!lampadaQuebrada()) {
            lampada.src = './img/desligada.jpg';
        }
        
    }

    function lampadaQuebrada() {
        lampada.src = './img/quebrada.jpg';
    }
}

lampada();