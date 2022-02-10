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
    let colorOrder = Math.floor(math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createElement(order[i]);
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
            lose();
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
    elementColor(color).classList.add('selected')

    setTimeout(() => {
        elementColor(color).classList.remove('selected')
    })
}