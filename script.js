let order = [];
let clickedOrder = [];
let score = 0;

/**
 * 0 => verde
 * 1 => vermelho
 * 2 => amarelo
 * 3 => azul
 */

const blue = document.querySelector('.blue');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');
const red = document.querySelector('.red');

// função para criar ordem aleatória
function shuffleOrder() {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1)
    }
};

// função para acender a cor
function lightColor(element, number) {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);

    setTimeout(() => {
        element.classList.remove('selected')
    })
}

// checagem do botão
function checkOrder() {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }

    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\n Você acertou! Iniciando próximo nível.`)
        nextLevel();
    }
}

// função de registro do click do usuário
function click(color) {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected')

    setTimeout(() => {
        createColorElement(color).classList.remove('selected')
        checkOrder();
    }, 250)

}

// função que retorna
function createColorElement(color) {
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if(color == 2) {
        return yellow
    } else if(color == 3) {
        return blue
    }
}

// função que vai aumentar o nível do jogo
function nextLevel() {
    score++;
    shuffleOrder()
}

// função que dispara caso haja game over
function gameOver() {
    alert(`Pontuação: ${score}\n Você perdeu o jogo :(\n Clique em OK para reiniciar.`)
    order = [];
    clickedOrder = [];
    playGame();
}

// play no game
function playGame() {
    alert(`Bem vindo ao GENESIS! Iniciando novo jogo!`)
    score = 0;
    nextLevel();
}

green.addEventListener('click', click(0))
red.addEventListener('click', click(1))
yellow.addEventListener('click', click(2))
blue.addEventListener('click', click(3))

green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)

playGame();