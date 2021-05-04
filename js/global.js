import Stage from "./stage.js";
import Character from "./character.js";
/**
 * @file Manages the functionalities of Street Fighter.
 * @author Davide Catani
 */

/* Class managing StreetFigter game. */
class Game {
    /**
     * Initialize variables, select beginner level and generate settings.
     */
    constructor() {
        this.gameContainer = document.getElementById("game-wrapper");
        this.stage = new Stage(this.gameContainer, 'ken');
        this.character = new Character(this.gameContainer, 'ryu');
    }

    /*
     * Initialize game.
     */
    init() {
        this.stage.init();
        this.character.init();
        this.gameLoop();
    }

    gameLoop() {
        this.character.characterLoop();
        this.stage.stageLoop();
        requestAnimationFrame(this.gameLoop.bind(this));
    }
}
let game = new Game();

game.init();