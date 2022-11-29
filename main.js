//Criando variável para armazenar o primeiro elemento da lista das classes
const character = document.getElementsByClassName("character")[0];
const containerCharacter = document.getElementsByClassName("container-character")[0];

//Definindo a velocidade do movimento do personagem
const VELOCITY = 10;

//Definindo o tamanho da tela
const SCREEN_WIDTH = screen.width;
const SCREEN_HEIGHT = screen.height;


//Definindo a posição inicial do personagem
let xPosition = 500;
let yPosition = 300;


//Definindo as teclas de movimento
const keysAvaiable = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]
const directions = ["turnUp", "turnLeft", "turnRight", "turnDown"];


//Definindo uma função para movimentar o personagem
window.addEventListener("keydown", (event) => {
    const key  = event.key;

    const keyPressedAvaiable =  keysAvaiable.some((currentKey) => {
        return currentKey === key;
    })

    if(!keyPressedAvaiable) return;

    directions.forEach((direction) => {
        if(character.classList.contains(direction)) character.classList.remove(direction);
    })


    if(key === "ArrowUp"){
        character.classList.add("turnUp");
        if (yPosition > 20) { //Definindo uma condição para que o personagem não saia da tela
            yPosition -= VELOCITY;
        }
    }

    if(key === "ArrowDown"){
        character.classList.add("turnDown");
        if (yPosition < (SCREEN_HEIGHT - 200)) { //Definindo uma condição para que o personagem não saia da tela por baixo
            yPosition += VELOCITY;
        }
    }

    if(key === "ArrowLeft"){
        character.classList.add("turnLeft"); //Definindo uma condição para que o personagem não saia da tela pela esquerda
        if (xPosition > 0) {
            xPosition -= VELOCITY;
        }
    }

    if(key === "ArrowRight"){
        character.classList.add("turnRight");
        if (xPosition < (SCREEN_WIDTH - 100)) { //Definindo uma condição para que o personagem não saia da tela pela direita
            xPosition += VELOCITY;
        }
    }

    containerCharacter.style.top = `${yPosition}px`;
    containerCharacter.style.left = `${xPosition}px`
});
