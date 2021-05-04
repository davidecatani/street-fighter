export default class Utils {
    constructor() {
    }    
}

export let rightPressed = false;
export let leftPressed = false;
export let upPressed = false;
export let downPressed = false;
export const KeyboardHelper = { left: 'ArrowLeft', up: 'ArrowUp', right: 'ArrowRight', down: 'ArrowDown' };

export const keyUpHandler = (e) => {
    console.log(e);
    switch (e.code) {
        case KeyboardHelper.right:
            rightPressed = false;
            break;
        case KeyboardHelper.left:
            leftPressed = false;
            break;
        case KeyboardHelper.down:
            downPressed = false;
            break;
        case KeyboardHelper.up:
            upPressed = false;
            break;
    }
}

export const keyDownHandler = (e) => {
    console.log(e);
    switch (e.code) {
        case KeyboardHelper.right:
            rightPressed = true;
            break;
        case KeyboardHelper.left:
            leftPressed = true;
            break;
        case KeyboardHelper.down:
            downPressed = true;
            break;
        case KeyboardHelper.up:
            upPressed = true;
            break;

    }
}