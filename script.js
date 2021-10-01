const lampada = document.getElementById('lampada');
const audioQuebrar = new Audio('lampada-quebrando.mp3');
const audioLigar = new Audio('interruptor.mp3');   
    

document.addEventListener('click', function(e) {
    const elemento = e.target;

    if(elemento.classList.contains('ligar')) {
        lampada.src = './img/ligada.jpg';
        audioLigar.play();
    }
    if(elemento.classList.contains('desligar')) {
        lampada.src = './img/desligada.jpg';
        audioLigar.play();
    }
});

document.addEventListener('mouseover', function(e) {
    const elemento = e.target;
    if(elemento.classList.contains('lampada')) {
        lampada.src = './img/ligada.jpg';
        audioLigar.play();
    }
});

document.addEventListener('mouseout', function(e) {
    const elemento = e.target;
    if(elemento.classList.contains('lampada')) {
        lampada.src = './img/desligada.jpg';
        audioLigar.play();
    }
});

document.addEventListener('dblclick', function(e) {
    const elemento = e.target;
    if(elemento.classList.contains('lampada')) {
        lampada.src = './img/quebrada.jpg';
        audioQuebrar.play();
        
    }
});
