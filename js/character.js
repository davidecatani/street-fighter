import {
    rightPressed,
    leftPressed,
    upPressed,
    downPressed,
    KeyboardHelper,
    keyUpHandler,
    keyDownHandler
} from './utils.js';
export default class Character {
    /**
     * Initialize character variables.
     */
    constructor(container, name) {
        this.container = container;
        this.name = name;
        this.keyState = [];
        this.left = 50;
        this.character;
    }

    /*
     * Initialize character.
     */
    init() {
        this.character = document.createElement('div');
        this.character.classList.add('character', this.name);
        this.container.appendChild(this.character);
        this.basicMoves();
        // this.characterLoop();
    }

    basicMoves() {
        document.addEventListener('keydown', e => {
            keyDownHandler(e);
            if (e.code === KeyboardHelper.left) {
                this.character.classList.add('backward');
            }
            if (e.code === KeyboardHelper.right) {
                this.character.classList.add('forward');
            }
            if (e.code === KeyboardHelper.down) {
                this.character.classList.add('down');
            }
        });
        document.addEventListener('keyup', (e) => {
            keyUpHandler(e);
            if (e.code === KeyboardHelper.left) {
                this.character.classList.remove('backward');
            }
            if (e.code === KeyboardHelper.right) {
                this.character.classList.remove('forward');
            }
            if (e.code === KeyboardHelper.down) {
                this.character.classList.remove('down');
            }
        });
    }

    characterLoop() {
        if (leftPressed && !downPressed) {
            this.left -= 1;
        }
        if (rightPressed && !downPressed) {
            this.left += 1;
        }
        if (Boolean(this.character)) {
            this.character.style.left = `${this.left}px`;
        }
        // requestAnimationFrame(this.characterLoop.bind(this));
    }
}