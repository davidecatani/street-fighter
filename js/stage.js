export default class Stage {
    /**
     * Initialize stage variables.
     */
    constructor(container, name) {
        this.container = container.querySelector('#game');
        this.name = name;
        this.ctx = this.container.getContext('2d');
        this.ground = new Image();
        this.distanceFromCenter = 0;
    }

    /*
     * Initialize stage.
     */
    init() {
        /*
        * Create the stage elements.
        */

        // let stage = document.createElement('div');
        // stage.classList.add('stage', this.name);
        // let ground = document.createElement('div');
        // ground.classList.add('ground');
        // stage.appendChild(ground);
        // let background = document.createElement('div');
        // background.classList.add('background');
        // stage.appendChild(background);
        // this.container.appendChild(stage);
        // this.stageLoop();
    }

    drawBackground() {
        this.ground.src = './img/stages/ken/ground.jpg';
        this.ctx.drawImage(this.ground, (260 + this.distanceFromCenter), 0, 392, 72, 0, 176,  392, 72);
    }

    stageLoop() {
        this.drawBackground();
        // requestAnimationFrame(this.stageLoop.bind(this));
    }
}